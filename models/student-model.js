//File Name: main-student-view-model.js - This file defines the database schema for viewing students

//Imports
let mongoose = require('mongoose');

//Database Schema
var studentViewSchema = new mongoose.Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
        required: true
  },
  location: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  availability: { type: String, required: true }
});

//Export view student model
let StudentView = module.exports = mongoose.model('studentView', studentViewSchema);
module.exports.get = function (callback, limit) {
    StudentView.find(callback).limit(limit);
}
