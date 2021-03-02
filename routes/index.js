const express = require("express");

const  router = express.Router();
const authenticate = require('../middleware/authenticate')
const authController = require('../controller/auth')
const orderController = require('../controller/order')
const role = require('../authorization/role')
const authorize = require('../authorization/authorize')

//Create a login endput
router.post('/login',authController.login )

router.use(authenticate)

router.get('/order',authorize(role.COMPLIANCE_OFFICER,role.CUSTOMER_SERVICE),orderController.getOrder)
router.post('/order',authorize(role.CUSTOMER_SERVICE), orderController.createOrder)
router.delete('/order',authorize(role.CUSTOMER_SERVICE),orderController.deleteOrder)

//plug in all routes that user can access if logged in
// router.get('/profile',profileController.profile)




module.exports =router