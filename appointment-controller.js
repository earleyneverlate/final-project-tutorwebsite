//File Name: schedule-controller.js - This file contains the functions for the
//api routes for scheduling appointments

//Imports
ScheduleAppointment = require('./appointment-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display form page when 'Add Book' is clicked
exports.newappointment = function (req, res) {
  res.render('appointment-form', {title: "Schedule Appointment", command: "Schedule Appointment", appointment: {}});
};

//Function to add new appointment to database
exports.addappointment = function (req, res) {
    var scheduleAppointment = new ScheduleAppointment();
    scheduleAppointment.tutor = req.body.tutor;
    scheduleAppointment.student = req.body.student;
    scheduleAppointment.appointmentDate = req.body.appointmentDate;
    scheduleAppointment.appointmentTime = req.body.appointmentTime;
    scheduleAppointment.message = req.body.message;

    scheduleAppointment.save(function (err, scheduleAppointment) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Appointment scheduled!"});
      }
    });
};

// ############## API ROUTE FUNCTIONS #####################
//Function to handle index
exports.index = function (req, res) {
    ScheduleAppointment.get(function (err, scheduleAppointment) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(scheduleAppointment);
      }
    });
};

//Function to get appointment by ID
exports.view = function (req, res) {
    ScheduleAppointment.findById(req.params.appointment_id, function (err, scheduleAppointment) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(scheduleAppointment);
      }
    });
};

//Function to schedule appointment
exports.new = function (req, res) {
    var scheduleAppointment = new ScheduleAppointment();
    scheduleAppointment.tutor = req.body.tutor;
    scheduleAppointment.student = req.body.student;
    scheduleAppointment.appointmentDate = req.body.appointmentDate;
    scheduleAppointment.appointmentTime = req.body.appointmentTime;
    scheduleAppointment.message = req.body.message;

    scheduleAppointment.save(function (err,  scheduleAppointment) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(scheduleAppointment);
      }
    });
};

//Function to update appointment by ID
exports.update = function (req, res) {
  ScheduleAppointment.findById(req.params.appointment_id, function (err, scheduleAppointment) {
    if (err) {
      res.send(err);
    } else {
      scheduleAppointment.tutor = req.body.tutor;
      scheduleAppointment.student = req.body.student;
      scheduleAppointment.appointmentDate = req.body.appointmentDate;
      scheduleAppointment.appointmentTime = req.body.appointmentTime;
      scheduleAppointment.message = req.body.message;

      scheduleAppointment.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.status(204).send();
        }
      });
    }
  });
};

//Function to delete appointment by ID
exports.delete = function (req, res) {
    ScheduleAppointment.remove({_id: req.params.appointment_id},
      function (scheduleAppointment) {
        res.status(204).send();
    });
};
