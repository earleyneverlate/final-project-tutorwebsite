//File Name: server.js - This is the app's entry point

//Imports
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');

//Database configuration
mongoose.connect('mongodb://localhost/tutorwebsite');
var db = mongoose.connection;

app.listen(port);
console.log('Server is running on port: ' + port);

//Export module
module.exports = app;
