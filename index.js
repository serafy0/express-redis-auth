const express = require('express')
const session = require('express-session')
const redis = require('redis')

const connectRedis = require('connect-redis')

const app = express()

//if the app is running with a proxy like (nginx)
//app.set('trust proxy',1)


//you can replace this with another datastore
const RedisStore = connectRedis(session)

const redisClient = redis.createClient({
    port:6379,
    host:'localhost'

})

app.use(session({
    store:new RedisStore({client:redisClient}),
    secret: 'mySecret',
    saveUninitialized: false,
    cookie:{
        secure: false, //if true only transmit https only
        httpOnly:true, //stops client side javascript
        maxAge:1000 *60*30 //session max age in milliseconds
    }
}))

//Create a login endput
app.post('/login',(req,res)=>{
    const {email, password} =req;
    //check if the credentials are correct
    //...

    //assume that credentials are correct
    req.session.clientId = 'abc123'
    req.session.myNum = 5;
    res.json('you area now logged in')


})

//plug in another middleware the will check if the user is logged in or not
//all requests that are plugged in after this middleware will only be accessible if the user is logged in

app.use((req,res,next)=>{
    if(!req.session ||!req.session.clientId){
        const err = new Error('You shall not pass')
        err.statusCode=401;
        next(err)
    }
    next();
})


//plug in all routes that user can access if logged in
app.get('/profile',  (req,res)=>{
    res.json(req.session)
})

app.listen(8080,()=>console.debug('server is running on port 8080'))