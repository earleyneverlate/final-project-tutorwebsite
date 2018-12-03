//File Name: tutor-model.js - This file defines the database schema for viewing tutors

//Imports
let mongoose = require('mongoose');

//Database Schema
var tutorViewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  availability: { type: String, required: true }
});

//Export view tutor model
let TutorView = module.exports = mongoose.model('tutorView', tutorViewSchema);
module.exports.get = function (callback, limit) {
    TutorView.find(callback).limit(limit);
}
