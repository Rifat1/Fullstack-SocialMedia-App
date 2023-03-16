const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res, next) => {
    try {
        let user = await db.User.findOne({
            email: req.body.email
        });
        let {id, username, profileImageLink} = user;
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            let token = jwt.sign({id, username, profileImageLink}, process.env.JWT_SECRET);
            return res.status(200).json({ id, username, profileImageLink, token });
        } else {
            return next({
                status: 400,
                message: "invalid username or password"
            });
        }
        
    } catch (error) {
        return next({
            status: 400,
            message: "invalid username or password"
        });
    }
};


exports.signup = async (req, res, next) => {
    try {
        let user = await db.User.create(req.body);
        let {id, username, profileImageLink} = user;
        let token = jwt.sign({ id, username, profileImageLink }, process.env.JWT_SECRET)
        return res.status(200).json({ id, username, profileImageLink, token });

    } catch (error) {
        if (error.code === 11000) {
            error.message = "Sorry, that username/email already exists"; 
        }
        return next({
            status: 400,
            message: error.message
        });    
    }
};