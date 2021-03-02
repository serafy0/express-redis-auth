const bcrypt = require('bcrypt')
const role = require('../authorization/role')

const users={
    'compliance@productioncoder.com':{
        pwHash: bcrypt.hashSync('password',10),
        roles:[role.COMPLIANCE_OFFICER],
        id: 'e0f2f9e9-2471-4af8-b0f8-ba4c73f5e147'
    },
    'service@productioncoder.com':{
        pwHash: bcrypt.hashSync('password',10),
        roles:[role.CUSTOMER_SERVICE],
        id: '8e968729-15d1-4eb3-aa1a-c4fdb3a9fb91'

    }
}

//this would probably be async when we use a database
function findUserByEmail (email){

    const user = users[email];
    return user ? user:Promise.reject('user not found')
}

module.exports = {findUserByEmail}