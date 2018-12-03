//File Name: register-controller.js 

//Imports
ScheduleAppointment = require('../models/register-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display student-profile-form
exports.newusers = function (req, res){
  res.render('register-form', {title:"New User", newusers:{}});
};

//Function to add new appointment to database
exports.newusers = function (req, res) {
    var register = new Registered();
    register.first = req.body.first;
    register.last = req.body.last;
    register.email = req.body.email;
    register.password= req.body.password;
    register.confirm = req.body.confirm;

    register.save(function (err, register) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Registered!"});
      }
    });
};
