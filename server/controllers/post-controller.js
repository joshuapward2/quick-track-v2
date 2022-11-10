const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

const postController = {
    getPost(req, res) {
        Post.find
    }
}

module.exports = postController;