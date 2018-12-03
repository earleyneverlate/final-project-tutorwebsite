//File Name: tutor-controller.js - This file contains the functions for the tutor routes

//Imports
TutorView = require('../models/tutor-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display tutor-profile-form
exports.newtutor = function (req, res){
  res.render('tutor-profile-form', {title:"New Tutor Profile", tutor:{}});
};

//Function to display page with list of all tutors
exports.alltutors = function (req, res){
  TutorView.get(function (err, tutor) {
    if (err) {
      res.render('error', {message: "Uh oh! No tutors were retrieved."});
    } else {
      res.render('main-tutor-view', {title:"Find Tutors", tutors:tutor});
    }
  });
};

//Function to handle index
exports.tutorindex = function (req, res) {
  TutorView.get(function (err, tutor) {
    if (err) {
      res.render('error', {message: "Oops! No tutor was found."});
    } else {
      res.render('tutor-detail', {tutors: tutor});
    }
  });
};

//Function to get tutor by ID and display on tutor-detail page
exports.viewtutor = function (req, res) {
  TutorView.findById(req.params.tutor_id, function (err, tutor) {
    if (err) {
      res.render('error', {message: "Oops! No tutor found."});
    } else {
      res.render('tutor-detail', {tutor: tutor});
    }
  });
};

//Function to add new tutor to database
exports.addtutor = function (req, res) {
    var tutorView = new TutorView();
    tutorView.name = req.body.name;
    tutorView.location = req.body.location;
    tutorView.grade = req.body.grade;
    tutorView.subject = req.body.subject;
    tutorView.availability = req.body.availability;

    TutorView.save(function (err, tutorView) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Tutor Added!"});
      }
    });
};

// ############## API ROUTE FUNCTIONS #####################
//Function to handle index
exports.index = function (req, res) {
    TutorView.get(function (err, tutorView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(tutorView);
      }
    });
};

//Function to get tutor view by ID
exports.view = function (req, res) {
    TutorView.findById(req.params.tutor_id, function (err, tutorView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(tutorView);
      }
    });
};

//Function to add tutor
exports.new = function (req, res) {
    var tutorView = new TutorView();
    tutorView.name = req.body.name;
    tutorView.location = req.body.location;
    tutorView.grade = req.body.grade;
    tutorView.subject = req.body.subject;
    tutorView.availability = req.body.availability;

    tutorView.save(function (err, tutorView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(tutorView);
      }
    });
};

//Function to update tutor view by ID
exports.update = function (req, res) {
  TutorView.findById(req.params.tutor_id, function (err, tutorView) {
    if (err) {
      res.send(err);
    } else {
      tutorView.name = req.body.name;
      tutorView.location = req.body.location;
      tutorView.grade = req.body.grade;
      tutorView.subject = req.body.subject;
      tutorView.availability = req.body.availability;

      TutorView.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.status(204).send();
        }
      });
    }
  });
};

//Function to delete tutor view by ID
exports.delete = function (req, res) {
    TutorView.remove({_id: req.params.tutor_id},
      function (tutorView) {
        res.status(204).send();
    });
};
