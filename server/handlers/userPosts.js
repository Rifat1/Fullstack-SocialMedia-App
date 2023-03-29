const db = require("../models");

// POST /api/users/:id/posts
exports.createPost = async (req, res, next) => {
  try {
    let userPost = await db.UserPost.create({
      text: req.body.text,
      user: req.params.id,
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.userPosts.push(userPost.id);
    await foundUser.save();
    let foundPost = await db.UserPost.findById(userPost.id).populate("user", {
      username: true,
      profileImageLink: true,
    });
    return res.status(200).json(foundPost);
  } catch (error) {
    return next(error);
  }
};

// GET /api/users/:id/posts/:post_id
exports.getPost = async (req, res, next) => {
  try {
    let userPost = await db.UserPost.find(req.params.post_id);
    return res.status(200).json(userPost);
  } catch (error) {
    return next(error);
  }
};

// DELETE /api/users/:id/posts/:post_id
exports.deletePost = async (req, res, next) => {
  try {
    let userPost = await db.UserPost.findById(req.params.post_id);
    await userPost.deleteOne();
    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    return next(error);
  }
};
