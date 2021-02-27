const express = require('express')
const session = require('express-session')
const redis = require('redis')

const connectRedis = require('connect-redis')
const router = require('./routes')

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
    resave:false,
    name:'sessionId',
    cookie:{
        secure: false, //if true only transmit https only
        httpOnly:true, //stops client side javascript
        maxAge:1000 *60*30 //session max age in milliseconds
    }
}))


app.use(router)





app.listen(8080,()=>console.log('server is running on port 8080'))