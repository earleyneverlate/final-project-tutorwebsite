//File Name: login-controller.js 

//Imports
Login = require('../models/login-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display register view
exports.login = function (req, res){
  res.render('login', {title:"Login", login:{}});
};

//Function to add new registered users to database
exports.login = function (req, res) {
    var login = new Login();
    login.username = req.body.username;
    login.password = req.body.password;

    login.save(function (err, login) {
      if (err) {
        res.render('error', {message: err});
      } else {
        res.render('error', {message: "Login!"});
      }
    });
};

