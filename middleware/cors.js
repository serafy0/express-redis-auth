const cors = require('cors')

var whitelist = new Set( ['http://example1.com', 'http://example2.com'])
//is set faster ??


const corOptions ={
    optionsSuccessStatus: 200 ,
    origin: function (origin, callback) {
        // db.loadOrigins is an example call to load
        // a list of origins from a backing database
        if (whitelist.has(origin)){
            callback(null,true)
        }else{
            callback(new Error(`Not allowed by CORS`))
        }
        // db.loadOrigins(function (error, origins) {
        //     callback(error, origins)
        // })
    },
    credentials:true,



}

module.exports = cors(corOptions)
