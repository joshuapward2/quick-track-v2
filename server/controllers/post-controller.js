const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

const postController = {
    getPost(req, res) {
        Post.find({})
        .then((post) => res.json(post))
        .catch((err) => res.status(500).json(err));
    },

    getSinglePost(req, res) {
        Post.findOne({ _id: req.params.postId })
          .select("-__v")
          .then((post) =>
            !post
              ? res.status(404).json({ message: "No Post find with that ID!" })
              : res.json(post)
          )
          .catch((err) => res.status(500).json(err));
    },

    updatePost(req, res) {
        Post.findOneAndUpdate(
          { _id: req.params.postId },
          { $set: req.body },
          { runValidators: true, New: true }
        )
          .then((post) =>
            !post
              ? res.status(404).json({ message: "No post find with this ID!" })
              : res.json(post)
          )
          .catch((err) => res.status(500).json(err));
    },

    createPost(req, res) {
        Post.create(req.body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $push: { posts: _id } },
              { new: true }
            );
          })
          .then((post) =>
            !post
              ? res.status(404).json({ message: "No User find with this ID!" })
              : res.json(post)
          )
          .catch((err) => res.status(500).json(err));
    },

    removePost(req, res) {
        Post.findOneAndDelete({ _id: req.params.postId })
          .then((post) =>
            !post
              ? res.status(404).json({ message: "No post find with this ID!" })
              : User.findOneAndUpdate(
                  { posts: req.params.postId },
                  { $pull: { posts: req.params.postId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'post deleted, but no user found'})
              : res.json({ message: 'post successfully deleted' })
          )
          .catch((err) => res.status(500).json(err));
    },
}

module.exports = postController;