let Mongoose = require('mongoose');


let employeeSchema = Mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    job:{
        type:String,
        required: true
    },
    salary:{
        type:Number,
        required: true
    }
});

let employee = module.exports = Mongoose.model('Employee',employeeSchema);