const mongoose = require('mongoose');
const user = require('./user');

const userPostSchema = new mongoose.Schema({
    text: {
        type : String,
        required : true
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const UserPost = mongoose.model('UserPost', messagesSchema);

module.exports = UserPost;