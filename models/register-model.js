//File Name: register-model.js - This file defines the database schema for registering

//Imports
let mongoose = require('mongoose');

//Database Schema
var registerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true }, 
  password: { type: String, required: true }, 
  confirm: { type: String, required: true } 
});

//Export register model
let register = module.exports = mongoose.model('register', registerSchema);
module.exports.get = function (callback, limit) {
  register.find(callback).limit(limit);
}
