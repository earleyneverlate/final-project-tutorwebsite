//File Name: register-model.js - This file defines the database schema for registering

//Imports
let mongoose = require('mongoose');

//Database Schema
var registerSchema = new mongoose.Schema({
  username: { type: String, unique:true, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  confirm: { type: String, required: true }
});

//Export register model
var Register = module.exports = mongoose.model('register', registerSchema);
module.exports.get = function (callback, limit) {
    Register.find(callback).limit(limit);
}
