const express = require("express");

const  router = express.Router();
const authenticate = require('../middleware/authenticate')

//Create a login endput
router.post('/login',(req,res)=>{
    const {email, password} =req;
    //check if the credentials are correct
    //...

    //assume that credentials are correct
    req.session.clientId = 'abc123'
    req.session.myNum = 5;
    res.json('you area now logged in')


})

router.use(authenticate)

//plug in all routes that user can access if logged in
router.get('/profile',  (req,res)=>{
    res.json(req.session)
})




module.exports =router