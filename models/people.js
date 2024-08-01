const mongoose = require('mongoose');
const peopleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["chef","owner","waiter"],
        required:true
    },
    salary:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    phoneNO:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        required:true,
        type:String,
    },
    Password:{
        type:String,
        required:true,
    }
});
const PeoplesModel = mongoose.model('Peoples',peopleSchema)
module.exports = PeoplesModel;