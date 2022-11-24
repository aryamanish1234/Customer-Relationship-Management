const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cuestomerSchema = new Schema({
    
    CustomerType : {
        type : String,
        required : true,
        default  : "Business"
    },
    primaryContact : [{
        salution: {
            type : String,
            required : true,
            default : "Mr."
        }, 
       firstName: {
        type : String,
        required:true,
       },
       lastName: {
        type : String,
        required:true,
       }
}], 
   companyName: {
    type:String,
    required:true
   },
   dispalyName: {
    type:String,
   }, 
   email: {
    type:String,
    required:true,
   },
phoneNumber: [
    {
        workPhone: {
            type:Number,
        }, 
        Mobile: {
            type: Number, 
            required: true,
        }
    }
], 
website:{
    type:String,
    required:true,
}


})

const comapany = mongoose.model("cuestomer", cuestomerSchema)
module.exports = comapany
