const authService = require('../service/auth')


async function login  (req,res) {
    const {email, password} =req.body;

    //payload validation
    //in prod use a validation libirary like joi or yum
    if(!email || !password){
        return res.status(400).json('bad request params - ')
    }
    //check if the credentials are correct
    try {
        const user = await authService.login(email, password)
        req.session.user = user;
        res.sendStatus(204)
    }catch (err){
        //never user use console.log or console.error
        //lookup winston
        console.error(err);
        return res.status(401).json(err)
    }


    //assume that credentials are correct
    // req.session.clientId = 'abc123'
    // req.session.myNum = 5;
    // res.json('you area now logged in')


}
module.exports = {login}