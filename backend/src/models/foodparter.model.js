
const moongoose =require('mongoose');

const foodPartnerSchema =new moongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
      type:String,

    }
})
const foodPartnerModel =moongoose.model("foodpartner",foodPartnerSchema);

module.exports=foodPartnerModel;