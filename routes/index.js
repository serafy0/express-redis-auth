const express = require("express");

const  router = express.Router();
const authenticate = require('../middleware/authenticate')
const authController = require('../controller/auth')
const profileController = require('../controller/profile')

//Create a login endput
router.post('/login',authController.login )

router.use(authenticate)

//plug in all routes that user can access if logged in
router.get('/profile',profileController.profile)




module.exports =router