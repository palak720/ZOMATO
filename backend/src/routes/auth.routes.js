
const express =require('express')
const authcontroller =require("../controllers/auth.controller")

const router =express.Router();

// user auth APIs
router.post('/user/register',authcontroller.registerUser)
router.post('/user/login',authcontroller.loginUser)
router.post('/user/logout',authcontroller.logoutUser)

// food partner auth APIs
router.post('/food-partner/register',authcontroller.registerFoodPartner)
router.post('/food-partner/login',authcontroller.loginFoodPartner)
router.get('/food-partner/logout',authcontroller.logoutFoodPartner)

module.exports =router;