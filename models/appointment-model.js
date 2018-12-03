//File Name: schedule-model.js - This file defines the database schema for
//scheduling appointments

//Imports
var mongoose = require('mongoose');

//Database Schema
var scheduleAppointmentSchema = mongoose.Schema({
    tutor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'tutorView',
          required: true
    },
    student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'studentView',
          required: true
    },
    appointmentDate: {
      type: Date,
      required: true
    },
    appointmentTime: {
      type: String,
      required: true
    },
    message: {
      type: String
    }
});

//Export Book model
var ScheduleAppointment = module.exports = mongoose.model('scheduleAppointment', scheduleAppointmentSchema);
module.exports.get = function (callback, limit) {
    ScheduleAppointment.find(callback).limit(limit);
}
