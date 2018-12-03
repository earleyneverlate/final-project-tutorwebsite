//File Name: register-model.js - This file defines the database schema for registering

//Imports
let mongoose = require('mongoose');

//Database Schema
var registerSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirm: { type: String, required: true }
});

//Export register model
var Register = module.exports = mongoose.model('register', registerSchema);
module.exports.get = function (callback, limit) {
    Register.find(callback).limit(limit);
}
