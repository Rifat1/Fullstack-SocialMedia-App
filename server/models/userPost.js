const mongoose = require('mongoose');
const User = require('./user');

const userPostSchema = new mongoose.Schema({
    text: {
        type : String,
        required : true,
        maxLength: 280
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

userPostSchema.pre('remove', async function(next) {
    try {
        let user = await User.findById(this.user);
        user.userPosts.remove(this.id);
        await user.save();
        return next();
    } catch (error) {
        return next(error);
    }
});

const UserPost = mongoose.model('UserPost', userPostSchema);

module.exports = UserPost;