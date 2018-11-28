//File Name: server.js - This is the app's entry point

//Imports
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    appointmentRoutes = require("./appointment-routes"),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//Allow body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

//Database configuration
mongoose.connect('mongodb://localhost/tutorwebsite');
var db = mongoose.connection;

//Using appointmentRoutes which defines all the API endpoints
app.use('/', appointmentRoutes)

app.listen(port);
console.log('Server is running on port: ' + port);

//Export module
module.exports = app;
