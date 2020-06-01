
let Mongoose = require('mongoose');

var Schema = Mongoose.Schema;
var ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});
module.exports = Mongoose.model('Img', ImgSchema);

// let fileSchema = Mongoose.Schema({
//     contentType:{
//         type:String
//     },
//     data:{
//         type:Buffer
//     },
//     path:{
//         type:String
//     }
// });

// let file = module.exports = Mongoose.model('File',fileSchema);