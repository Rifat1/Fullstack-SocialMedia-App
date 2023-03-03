const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        typeof: String,
        required: true,
    },
    username: {
        typeof: String,
        required: true,
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;