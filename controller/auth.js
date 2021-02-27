module.exports.login= (req,res)=>{
    const {email, password} =req;
    //check if the credentials are correct
    //...

    //assume that credentials are correct
    req.session.clientId = 'abc123'
    req.session.myNum = 5;
    res.json('you area now logged in')


}