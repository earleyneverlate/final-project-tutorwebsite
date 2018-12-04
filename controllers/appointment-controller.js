//File Name: appointment-controller.js - This file contains the functions for the appointment routes

//Imports
ScheduleAppointment = require('../models/appointment-model');
Tutor = require('../models/tutor-model');
Student = require('../models/student-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display form page when 'Schedule Appointment' is clicked
exports.newstudentappointment = function (req, res) {
  Student.find({ _id: req.params.student_id })
  .exec(function (err, student) {
    if (err) {
      res.render('error', {message: err});
    } else if (!student) {
      res.render('error', {message: "No student found!"});
    } else {
      res.render('appointment-form-student', {title: "Schedule Appointment With Student", studentdetails: student[0].first + " " + student[0].last, command: "Schedule Appointment", appointment: {}});;
    }
  });
};

exports.newtutorappointment = function (req, res) {
  Tutor.find({ _id: req.params.tutor_id })
  .exec(function (err, tutor) {
    if (err) {
      res.render('error', {message: err});
    } else if (!tutor) {
      res.render('error', {message: "No tutor found!"});
    } else {
      res.render('appointment-form-tutor', {title: "Schedule Appointment With Tutor", tutordetails: tutor[0].first + " " + tutor[0].last, command: "Schedule Appointment", appointment: {}});;
    }
  });
};

//Function to display all appointments
exports.viewstudentappointment = function (req, res){
  ScheduleAppointment.find({ student: req.params.student_id })
    .exec(function (err, appointment) {
      if (err) {
        res.render('error', {message: err});
      } else if (!appointment) {
        res.render('error', {message: "No appointments found!"});
      } else {
        res.render('appointment-view-student', {title:"View All Appointments", appointments:appointment});
      }
    });
};

exports.viewtutorappointment = function (req, res){
  ScheduleAppointment.find({ tutor: req.params.tutor_id })
    .exec(function (err, appointment) {
      if (err) {
        res.render('error', {message: err});
      } else if (!appointment) {
        res.render('error', {message: "No appointments found!"});
      } else {
        res.render('appointment-view-tutor', {title:"View All Appointments", appointments:appointment});
      }
    });
};

//Function to add new student appointment to database
exports.addstudentappointment = function (req, res) {
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
        res.redirect('/appointments/view/tutor/' + scheduleAppointment.tutor);
      }
    });
};

//Function to add new tutor appointment to database
exports.addtutorappointment = function (req, res) {
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
        res.redirect('/appointments/view/student/' + scheduleAppointment.student);
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
