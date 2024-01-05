const userService = require('../Services/index.js')
const bcrypt = require('bcrypt');



 async function createUser(req, res){
    const result=await userService.createUser(req,res)
    return res.send(result)
}




module.exports ={
    createUser}


