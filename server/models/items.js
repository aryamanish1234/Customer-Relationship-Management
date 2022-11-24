const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemsSchema = new Schema({

    Type : {
        type : String,
        required : true,
        default  : "Goods"
    },
    name:  String,
    unit: String,
    salesInfo: [{
        sellingPrice: {
            type: Number
        },
        account: {
            account: String,

        }, 
        description: {
            type: String,
        }
    }], 
    purchaseInfo: [{
        costPrice: {
            type: Number
        }, 
        account: {
            type: String
        }, 
        description: {
            type: String
        }
    }]

})

const items = mongoose.model("items", itemsSchema)
module.exports = items
