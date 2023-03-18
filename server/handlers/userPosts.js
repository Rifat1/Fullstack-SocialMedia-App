const db = require("../models");

// /api/users/:id/posts
exports.createPost = async (req, res, next) => {
    try {
        let userPost = await db.UserPost.create({
            text : req.body.text,
            user : req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.userPosts.push(userPost.id);
        await foundUser.save();
        let foundPost = await db.UserPost.findById(userPost.id).populate("user", { 
            username: true, 
            profileImageLink: true }); 
        return res.status(200).json(foundPost);
    } catch (error) {
        return next(error);
    }
};

exports.getPosts = async (req, res, next) => {};

exports.deletePost = async (req, res, next) => {};