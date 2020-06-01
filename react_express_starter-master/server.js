const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
let Employee = require('./model/employee');
let File =require('./model/files');
const fileUpload = require('express-fileupload');

const passport = require('passport');
require('./config/passport')(passport);

//app.use(cors());

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//DB connection
db.once('open', () => {
  console.log('Connected to MongoDb...');
});

//DB errors
db.on('error',(err) => {
  console.log('Do not connect to mongoDB');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/api',require('./routes/getFile'));
app.use('/',require('./routes/postFile'));
app.use('/user',require('./routes/users'));

app.get('/',(req,res) => {
  res.send('hello');
});

//Passport
app.use(passport.initialize());
app.use(passport.session());

const port = 5000;
console.log(`Server running on port ${port}`);
app.listen(port, () => `Server running on port ${port}`); 

//app.use(fileUpload());


// app.post ('/about',(req,res) => {
//   if(req.body === null){
//     console.log("no file");
//     return res.status(400).json({msg:'no file'});
//   }
//   else {
//     console.log('merge');
//   }

  
//   const file = req.files.file;
//   file.mv(`${__dirname}/client/uploads/${file.name}`,err => {
//     if(err){
//       console.error(err);
//       return res.status(300).send(err);
//     }
//     res.json({fileName:file.name,filePath:`/client/uploads/${file.name}`})
//   })
// console.log(req.files)
  

// })



//umpload file mongoDB

// app.use(bodyParser.urlencoded({extended:true}));

// var storage = multer.diskStorage(
//   {
//     destination: (req,file,cb) => {
//       cb(null,'/client/uploads')
//     },
//     filename:(req,file,cb) => {
//       cb(null,file.fieldname + '-'+Date.now()+ path.extname(file.originalname))
//     }
//   }
// )

// var upload =multer ({
//   storage:storage
// })

// app.post('/about',upload.single('myImage'),(req,res)=> {
//   let fille = new File();
//   const file = req.files.file;
//   file.mv(`${__dirname}/client/uploads/${file.name}`,err => {
//     if(err){
//       console.error(err);
//       return res.status(300).send(err);
//     }})
  
//   var path = `${__dirname}/client/uploads/${file.name}`;
//   fille.contentType = req.files.file.mimetype;
//   fille.data = fs.readFileSync(path);
//   //fille.path = path;
 
//   fille.save((err) => {
//     if(err){
//       console.log(err);
//       alarm("nu merge")
//     }else{
//       alarm(" merge")
//     }
//   })
// });


// app.get('/api/about', (req, res) => {
//   File.find({},(err,file) => {
//     if(err){
//       console.log(err);
//     }else {
//       res.json(file);
//     }
//   })
// });

