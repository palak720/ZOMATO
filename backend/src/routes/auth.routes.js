
const express =require('express')
const authcontroller =require("../controllers/auth.controller")

const router =express.Router();

router.post('/user/register',authcontroller.registerUser)
router.post('/user/login',authcontroller.loginUser)
router.post('/user/logout',authcontroller.logoutUser)
    

module.exports =router;