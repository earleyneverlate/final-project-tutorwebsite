//File Name: main-student-view-model.js - This file defines the database schema for viewing students 

//Imports
let mongoose = require('mongoose');

//Database Schema
var studentViewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true }, 
  availability: { type: String, required: true } 
});

//Export view student model
let StudentView = module.exports = mongoose.model('StudentView', studentViewSchema);
module.exports.get = function (callback, limit) {
    StudentView.find(callback).limit(limit);
}
