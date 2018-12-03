//File Name: appointment-routes.js - this file contains API endpoints

//Imports
let express = require('express'),
    app = express();
let router = require('express').Router();
var appointmentController = require('./controllers/appointment-controller');
var studentviewController = require('./controllers/student-controller');
var tutorviewController = require('./controllers/tutor-controller');

//Default API response
router.get('/', function (req, res) {
    res.render('index');
});

//apppointment routes
router.route('/appointment/new')
    .get(appointmentController.newappointment)
    .post(appointmentController.addappointment)

//tutor routes
router.route('/tutor/new')
    .get(tutorviewController.newtutor)
    .post(tutorviewController.addtutor)

router.route('/tutor/view')
    .get(tutorviewController.alltutors)

//student routes
router.route('/student/new')
    .get(studentviewController.newstudent)
    .post(studentviewController.addstudent)

router.route('/student/view')
    .get(studentviewController.allstudents)

//register routes
router.route('register/new')
    .get(registerController.newusers)

//appointment API routes
router.route('/api/appointment')
    .get(appointmentController.index)
    .post(appointmentController.new);

router.route('/api/appointment/:appointment_id')
    .get(appointmentController.view)
    .put(appointmentController.update)
    .delete(appointmentController.delete);

//student view API routes
router.route('/api/studentview')
	.get(studentviewController.index)
	.post(studentviewController.new);

router.route('/api/studentview/:studentView_id')
	.get(studentviewController.view)
  .put(studentviewController.update)
  .delete(studentviewController.delete);

//tutor view API routes
router.route('/api/tutorview')
	.get(tutorviewController.index)
	.post(tutorviewController.new);

router.route('/api/tutorview/:tutorView_id')
	.get(tutorviewController.view)
  .put(tutorviewController.update)
  .delete(tutorviewController.delete);

//Export module
module.exports = router;
