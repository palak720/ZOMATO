
const userModel =require("../models/user.model")

async function registerUser(req,res){
    const {fullName,email,password} =req.body;
}

const isUserAlreadyExits =await userModel.findOne({
    email
})

if(isUserAlreadyExits){
    return res.status(400).json({
     message: "User already exists"
    })
}