const { User, Post } = require('./models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = User.findOne({ _id: context.user._id })
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
    }
}