const express = require('express')
const router = require('./routes')

const session = require('./middleware/session ')


const app = express()

//if the app is running with a proxy like (nginx)
//app.set('trust proxy',1)


app.use(session)


app.use(router)





app.listen(8080,()=>console.log('server is running on port 8080'))