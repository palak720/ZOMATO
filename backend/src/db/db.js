
const mongoose =require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://27017/food-view")
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log("MongoDB connection err:",err)
    })
}
module.exports=connectDB;