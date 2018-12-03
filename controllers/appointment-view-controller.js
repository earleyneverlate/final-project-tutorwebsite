//File Name: appointment-view-controller.js 

//Imports
ScheduleAppointment = require('../models/appointment-view-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display appointemnet-view
exports.appointmentView = function (req, res){
  res.render('appointment-view', {title:"Appointment View", appointments:{}});
};

//Function to add new appointment to database
exports.appointmentView = function (req, res) {
    var appointmentView = new appointments();
    appointments.tutor = req.body.tutor;
    appointments.student = req.body.student;
    appointments.date = req.body.date;
    appointments.time= req.body.time;
    appointments.message = req.body.message;

    appointments.save(function (err, appointments) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Appointments!"});
      }
    });
};
