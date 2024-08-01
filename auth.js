const passport = require('passport');
const localStratgy = require('passport-local').Strategy
const people = require('./models/people')
passport.use(new localStratgy(async(USERNAME,PASSWORD,done)=>{
    try {
      //console.log(`recevied credentials ${USERNAME,PASSWORD}`);
      const user = await people.findOne({username:USERNAME});
      if(!user){
        return done(null,false,{message:'inncorrect username'})
      }
      const ispasswordMatch = user.Password = PASSWORD ? true:false;
      if(ispasswordMatch){
        return done(null, user);
      }
      else{
        return done(null , false, {message:'incorrect password'});
      }
    } catch (error) {
      return done(error);
    }
  }));

  module.exports = passport