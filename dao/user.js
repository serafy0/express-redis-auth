const bcrypt = require('bcrypt')

const users={
    'user1@productioncoder.com':{
        pwHash: bcrypt.hashSync('user1pw',10),
        roles:['ADMIN'],
        id: 'e0f2f9e9-2471-4af8-b0f8-ba4c73f5e147'
    },
    'user2@productioncoder.com':{
        pwHash: bcrypt.hashSync('user2pw',10),
        roles:['ACCOUTN_Manager'],
        id: '8e968729-15d1-4eb3-aa1a-c4fdb3a9fb91'

    }
}

//this would probably be async when we use a database
function findUserByEmail (email){

    const user = users[email];
    return user ? user:Promise.reject('user not found')
}

module.exports = {findUserByEmail}