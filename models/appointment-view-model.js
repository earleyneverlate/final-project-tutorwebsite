
//File Name: appointment-view-model.js 

//Imports
let mongoose = require('mongoose');

//Database Schema
var appointmentViewSchema = new mongoose.Schema({
  tutor: { type: String, required: true },
  student: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String, required: false }
});

//Export view student model
let appointmentView = module.exports = mongoose.model('AppointmentView', appointmentViewSchema);
module.exports.get = function (callback, limit) {
    appointmentView.find(callback).limit(limit);

