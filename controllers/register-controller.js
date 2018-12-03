//File Name: register-controller.js - This file contains the functions for the login and sign up routes

//Imports
Register = require('../models/register-model');

// ############## HTML ROUTE FUNCTIONS #####################
//Function to display login view
exports.viewlogin = function (req, res){
  res.render('login', {title:"Login", login:{}});
};

//Function to display register view
exports.viewregister = function (req, res){
  res.render('register', {title:"New User", register:{}});
};

//Function to login
exports.login = function (req, res) {
    var login = new Register();
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

//Function to add new users to database
exports.adduser = function (req, res) {
    var register = new Register();
    register.first = req.body.first;
    register.last = req.body.last;
    register.username = req.body.username;
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
