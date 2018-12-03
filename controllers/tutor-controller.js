//File Name: tutor-controller;js

//Imports
TutorView = require('../models/tutor-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display tutor-profile-form
exports.newtutor = function (req, res){
  res.render('tutor-profile-form', {title:"New Tutor Profile", tutor:{}});
};

//Function to display main-tutor-view
exports.alltutors = function (req, res){
  res.render('main-tutor-view', {title:"Find Tutors", tutor:{}});
};


//Function to add new tutor to database
exports.addtutor = function (req, res) {
    var tutorView = new TutorView();
    tutorView.name = req.body.name;
    tutorView.location = req.body.location;
    tutorView.grade = req.body.grade;
    tutorView.subject = req.body.subject;
    tutorView.availability = req.body.availability;

    tutorView.save(function (err, tutorView) {
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
    tutorView.get(function (err, tutorView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(tutorView);
      }
    });
};

//Function to get tutor view by ID
exports.view = function (req, res) {
    tutorView.findById(req.params.tutorView_id, function (err, tutorView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(tutorView);
      }
    });
};

//Function to tutor view
exports.new = function (req, res) {
    var tutorView = new tutorView();
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
  tutorView.findById(req.params.tutorView_id, function (err, tutorView) {
    if (err) {
      res.send(err);
    } else {
      tutorView.name = req.body.name;
      tutorView.location = req.body.location;
      tutorView.grade = req.body.grade;
      tutorView.subject = req.body.subject;
      tutorView.availability = req.body.availability;

      tutorView.save(function (err) {
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
    tutorView.remove({_id: req.params.tutorView_id},
      function (tutorView) {
        res.status(204).send();
    });
};
