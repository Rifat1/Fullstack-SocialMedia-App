const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect("process.env.MONGODB_URI || 'mongodb://localhost:3000", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, keepAlive: true });


module.exports.User = require('./user');
module.exports.UserPost = require('./userPost');