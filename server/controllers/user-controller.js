const router = require('express').Router();
const { User, Post } = require('../models');

const userController = {
    // GET all users
    getUser(req, res) {
        User.find({})
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

    // get user by id
    getUserId(req, res) {
        User.findOne({ _id: req.params.userId })
          .populate("posts")
          .select("-__v")
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No User find with that ID!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No User find with this ID!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },
      
    // remove a user's thoughts when deleted.
    removeUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No User find with this ID!" })
              : Post.deleteMany({ _id: { $in: user.posts } })
          )
          .then(() => res.json({ message: "User deleted!" }))
          .catch((err) => res.status(500).json(err));
    },
}

module.exports = userController;