const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('posts');
        },
        user: async(parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('posts');
        },
        posts: async (parants, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params)
                .sort({ createdAt: -1 })
        },
        post: async(parents, { _id }) => {
            return Post.findOne({ _id });
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Email or password is incorrect');
            }

            const correctPw = await user.comparePassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Email or password is incorrect');
            }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if(context.user) {
                const post = await Post.create({ ...args, username: context.user.username })

                await User.findByIdAndUpdate(
                    { _id: context.user.id },
                    { $push: { posts: post._id }},
                    { new: true }
                );

                return post;
            }

            throw new AuthenticationError("You're not logged in");
        }
    }
}

module.exports = resolvers;