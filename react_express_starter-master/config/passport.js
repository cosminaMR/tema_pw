const LocalStrategy = require('passport-local');
const User = require('../model/user');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

module.exports = (passport) => {
    passport.use (
     new LocalStrategy((email,password,done) => {
         User.findOne({email:email})
            .then(user => {
                if(!user){
                    return done(null,false,{message:'That email is not register!'})
                }

                //Match password
                decrypt = (text) => {
                    let iv = Buffer.from(text.iv, 'hex');
                    let encryptedText = Buffer.from(text.encryptedData, 'hex');
                    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
                    let decrypted = decipher.update(encryptedText);
                    decrypted = Buffer.concat([decrypted, decipher.final()]);
                    return decrypted.toString();
                }

                decryptData = decrypt(user.pasword);

                if(password === decryptData){
                    return done(null,user);
                }else {
                    return done (null,false, {message:'Password incorrect!'})
                }

            })
            .catch(err => console.log("nu merge"))

     }) 
   )

   passport.serializeUser((user,done) => {
       done(null,user.id);
   })

   passport.deserializeUser((id,done) => {
       User.findById( id, (err, user) => {
           done(err, user);
       });
   });
}