const mongoose = require('mongoose');
const menucardSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    category:{
        type:String,
        required:true,
    },
    price_inr:{
        type:Number,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    taste:{
        type:String,
        required:true,
    },
    ingredient: [
        {
          type: String,
          required: true,
        },
      ],
});
const menuModel = mongoose.model('menuCard',menucardSchema);
module.exports = menuModel;
