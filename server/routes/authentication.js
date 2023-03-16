const express = require('express');
const router = express.Router();
const {signup, signin} = require('../handlers/authentication');

// @route   POST api/auth/signup
router.post('/signup', signup);
router.post('/signin', signin);
module.exports = router;