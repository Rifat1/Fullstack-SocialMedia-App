const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
// console.log(process.env.MONGODB_URI);
mongoose.connect("mongodb://127.0.0.1:27017/MyPost");

module.exports.User = require("./user");
module.exports.UserPost = require("./userPost");
