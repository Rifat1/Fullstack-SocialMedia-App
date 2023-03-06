const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Message'
    }]
});


const User = mongoose.model('User', userSchema);

module.exports = User;