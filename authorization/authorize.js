const ApiError = require('../errors/api-errors')

//a middleware factory for auth
function authorize(...roles) {
    const allowedRoles = new Set(roles)


    return (req, res, next) => {
        if (!req.session || !req.session.user || !req.session.user.roles) {
            // return unauthorized
            next(ApiError.unauthorized("you are not logged in"))
            return;
        }
        if (!isAuthorized(req.session.user.roles, allowedRoles)) {
            //return forbidden
            next(ApiError.forbidden("forbidden insufficient privileges"))
        }
        next();

    }
}


function isAuthorized(userRoles, allowedRoles) {
    //checks if the user has at least one od the allowed roles
    //O(n) where n is the amount of roles
    //we are user sets to avoid O(n^2)
    return userRoles.some(role => allowedRoles.has(role))

}


module.exports = authorize;