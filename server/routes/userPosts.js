const express = require('express');
const router = express.Router({mergeParams: true});
const { createPost } = require('../handlers/UserPost');

// @route   POST api/users/:id/posts
router.route('/').post(createPost);


module.exports = router;