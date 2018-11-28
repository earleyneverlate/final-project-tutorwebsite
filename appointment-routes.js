//File Name: appointment-routes.js - API endpoints for scheduling scheduling
//appointments are defined here

//Imports
let express = require('express'),
    app = express();
let router = require('express').Router();
var appointmentController = require('./appointment-controller');

//Default API response
router.get('/', function (req, res) {
    res.json({
       status: 'Schedule Appointment API Working!',
       message: 'Welcome!',
    });
});

//apppointment routes
router.route('/appointment/new')
    .get(appointmentController.newappointment)
    .post(appointmentController.addappointment)

//appointment API routes
router.route('/api/appointment')
    .get(appointmentController.index)
    .post(appointmentController.new);

router.route('/api/appointment/:appointment_id')
    .get(appointmentController.view)
    .put(appointmentController.update)
    .delete(appointmentController.delete);


//Export module
module.exports = router;
