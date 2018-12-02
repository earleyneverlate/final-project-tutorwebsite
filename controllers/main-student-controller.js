//File Name: student-view-model.js 
StudentView = require('/models/student-view-model');

exports.newstudentview = function (req, res){
  res.render('student-view-model', {title:"View Students", command:"View Students", view:{}});
};

//Function to add new student to database
exports.addstudentview = function (req, res) {
    var studentView = new StudentView();
    studentView.name = req.body.name;
    studentView.location = req.body.location;
    studentView.grade = req.body.grade;
    studentView.subject = req.body.subject;
    studentView.availability = req.body.availability;

    studentView.save(function (err, studentView) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Error"});
      }
    });
};

// ############## API ROUTE FUNCTIONS #####################
//Function to handle index
exports.index = function (req, res) {
    studentView.get(function (err, studentView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(studentView);
      }
    });
};

//Function to get student view by ID
exports.view = function (req, res) {
    studentView.findById(req.params.studentView_id, function (err, studentView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(studentView);
      }
    });
};

//Function to student view appointment
exports.new = function (req, res) {
    var studentView = new studentView();
    studentView.name = req.body.name;
    studentView.location = req.body.location;
    studentView.grade = req.body.grade;
    studentView.subject = req.body.subject;
    studentView.availability = req.body.availability;

    studentView.save(function (err,  studentView) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(studentView);
      }
    });
};

//Function to update student view by ID
exports.update = function (req, res) {
  studentView.findById(req.params.studentView_id, function (err, studentView) {
    if (err) {
      res.send(err);
    } else {
      studentView.name = req.body.name;
      studentView.location = req.body.location;
      studentView.grade = req.body.grade;
      studentView.subject = req.body.subject;
      studentView.availability = req.body.availability;

      studentView.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.status(204).send();
        }
      });
    }
  });
};

//Function to delete student view by ID
exports.delete = function (req, res) {
    studentView.remove({_id: req.params.studentView_id},
      function (studentView) {
        res.status(204).send();
    });
};