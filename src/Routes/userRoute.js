const express = require('express')
const router = express.Router();
const userController = require('../Controller/index.js');


router.post("/signup", userController.createUser);
// router.post('/login', userController.loginUser);



module.exports = router;


