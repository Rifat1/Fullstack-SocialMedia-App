const mongoose = require('mongoose');
const user = require('./user');

const messagesSchema = new mongoose.Schema({
    text: {
        type : String,
        required : true
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;