const express = require('express');
const router = express.Router({mergeParams: true});
const { createPost, getPost, deletePost } = require('../handlers/UserPosts');

// @route   POST api/users/:id/posts
router.route('/').post(createPost);

// @route   GET api/users/:id/posts/:post_id
router
    .route('/:post_id')
    .get(getPost)
    .delete(deletePost);

module.exports = router;