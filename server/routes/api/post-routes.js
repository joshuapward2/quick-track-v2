const router = require('express').Router();

const {
    getPost,
    getSinglePost,
    updatePost,
    createPost,
    removePost
} = require('../../controllers/post-controller');

// /api/posts
router.route('/')
    .get(getPost)
    .post(createPost);

// /api/posts/:postId
router.route('/:postId')
    .get(getSinglePost)
    .put(updatePost)
    .delete(removePost);

module.exports = router;