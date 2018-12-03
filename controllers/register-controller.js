//File Name: register-controller.js 

//Imports
ScheduleAppointment = require('../models/register-model');

//Function to add new appointment to database
exports.addnewuser = function (req, res) {
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
