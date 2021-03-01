const userDAO = require('../dao/user')
const bcrypt = require('bcrypt')


async function login (email, password){
    //lookup user by email
    try {
        const user = await userDAO.findUserByEmail(email);

        //we don't need to hash the plain text password before comparing
        //bcrypt.compare will always return resolved Promise with a boolean value
        //indicating whether the password hashes match
        const match = await bcrypt.compare(password,user.pwHash)
        if(match){
            return{id:user.id,roles:user.roles}
        }else {
            return Promise.reject('wrong username or password')
        }

    }catch (err){
        return Promise.reject('user not found')
    }
}
module.exports ={login}