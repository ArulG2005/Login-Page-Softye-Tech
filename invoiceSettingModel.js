const mongoose=require('mongoose');
const validator=require('validator');

const settingSchema=new mongoose.Schema({
    invoice_id:{
        type:Number,
        required:[true,"Please enter the invoice id"],
        unique:true
    },
    business_name:{
        type:String,
        required:[true,"Please enter the business name"]
    },
    email:{
        type:String,
        required:[true,"Please enter the email"],
        unique:true,
        validator:[validator.email,"Please enter the correct email"]
    },
    logo:{
        type:String,
    },
    terms_condition:{
        type:String,
        default:"N/A"
    },
    return_guidelines:{
        type:String,
        default:"N/A"
    }


});

const settingModel=mongoose.Model("settingModel",settingSchema);

module.exports=settingModel;