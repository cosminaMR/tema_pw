const express = require('express');
const router = express.Router();
const crypto = require('crypto');
let User = require('../model/user');


router.get('/register',(req,res) => {
    res.render('register');
});



const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

router.post('/register',(req,res) => {
    console.log('am primit datele');

    var encrypt = (text) => {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

//     var genRandomString = (length) => {
//         return (crypto.randomBytes(Math.ceil(length/2))
//                 .toString('hex') /** convert to hexadecimal format */
//                 .slice(0,length)
//           )  /** return required number of characters */
//     };

//     var sha512 = (password, salt) => {
//         var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//         hash.update(password);
//         var value = hash.digest('hex');
//         return {
//             salt:salt,
//             passwordHash:value
//         };
//     };

//     var salt = genRandomString(5);
//    var passwordData = sha512(req.body.password, salt);??


    
    console.log(req.body.password);
    var passwordData = encrypt(req.body.password);
    let user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password.iv = passwordData.iv
    user.password.encryptedData = passwordData.encryptedData;


    // const decrypt = (text) => {
    //     let iv = Buffer.from(text.iv, 'hex');
    //     let encryptedText = Buffer.from(text.encryptedData, 'hex');
    //     let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    //     let decrypted = decipher.update(encryptedText);
    //     decrypted = Buffer.concat([decrypted, decipher.final()]);
    //     return decrypted.toString();
    // }

    // const decryptData = decrypt(user.password);
    // console.log('parola decriptata'+ decryptData)


    console.log(user.password);
    user.save((err) => {
        if(err){
            console.log(err);
            console.log("eroare la server- nu s-au salvat datele in db")
        }else{
            console.log("data was saved in db");
        }
    });




    // saltHashPassword = (userpassword) => {
    //     var salt = genRandomString(16); /** Gives us salt of length 16 */
    //     var passwordData = sha512(userpassword, salt);
    //     console.log('UserPassword = '+userpassword);
    //     console.log('Passwordhash = '+passwordData.passwordHash);
    //     console.log('nSalt = '+passwordData.salt);
    // }

    // saltHashPassword(req.body.password);

    // let crypt = req.body.password;
    // //console.log(crypt);
    // crypto.scrypt(crypt, 'salt', 10, (err,derivedKey  ) => {
    //     if (err) throw err;

    //    console.log(derivedKey.toString('hex'));
    //    user.password = derivedKey.toString('hex');  // '3745e48...08d59ae'
    //    console.log(user.password);
    //   });
////////////////////
    //console.log(user.password);

    // bcrypt.getSalt(10,function (){
    //     console.log('nu merge aici...');
    //     bcrypt.hash(user.password,salt,(err,hash) => {
    //         if(err){
    //             //console.log(err);
    //             console.log('nu merge aici');
    //         }
    //         user.password = hash;
    //         // user.save((err) => {
    //         //     if(err){
    //         //       console.log(err);
    //         //       console.log("eroare la server- nu s-au salvat datele in db")
    //         //     }else{
    //         //       console.log("data was saved in db")
    //         //     }
    //         //   });
    //     });
    // });
   

});

router.get('/login',(req,res) => {
    res.render('login');
})





router.post('/login',(req,res) => {
    console.log('merge login');
    console.log(req.body.email);
    //let decryptData;
   // user = new User();
    User.findOne({email:req.body.email},(err,user) => {
        if(err) {
            console.log('eroare');
        }
        if(!user){
            console.log('That email is not register!') //return to client
        }else{
        console.log(user);
        console.log(user.password);

                

        //Match password
        let decrypt = (text) => {
            let iv = Buffer.from(text.iv, 'hex');
            let encryptedText = Buffer.from(text.encryptedData, 'hex');
        
            let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        }

        let decryptData = decrypt(user.password);
        console.log(decryptData);
        }
    });
   

    //     if(req.body.password === decryptData){
    //         console.log("Parolele se potrivesc!")
    //     }else {
    //         console.log('Password incorrect!');
    //     }

    // })
    // .catch(err => console.log("nu merge"))
})

module.exports = router;