module.exports.login= (req,res)=>{
    const {email, password} =req.body;

    //payload validation
    //in prod use a validation libirary like joi or yum
    if(!email || password){
        return res.status(400).json('bad request params - ')
    }
    //check if the credentials are correct
    //...

    //assume that credentials are correct
    req.session.clientId = 'abc123'
    req.session.myNum = 5;
    res.json('you area now logged in')


}