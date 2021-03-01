//plug in another middleware the will check if the user is logged in or not
//all requests that are plugged in after this middleware will only be accessible if the user is logged in

function authenticate(req,res,next){
    if(!req.session ||!req.session.user){
        const err = new Error('You shall not pass')
        err.statusCode=401;
        next(err)
    }
    next();
}

module.exports =authenticate