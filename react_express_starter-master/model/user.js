let Mongoose = require('mongoose');


let userSchema = Mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        iv:{
            type:String,
            required: true
        },
        encryptedData: {
            type:String,
            required: true
        }
       
    }
});

let user = module.exports = Mongoose.model('User',userSchema);