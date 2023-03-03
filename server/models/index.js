const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect("process.env.MONGODB_URI || 'mongodb://localhost:2701", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


module.exports.User = require('./user');