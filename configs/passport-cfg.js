const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModels = require('../models/user');
const bcrypt = require('bcrypt');


let initPassport = () => {
    passport.use(new LocalStrategy({
        usernameField: "un",
        passwordField: "pw"
        }, async (un, pw, done) => {
            try {
                let user = await userModels.getUser(un);
                
                if (!user) {
                  return done(null, false, { message: 'Incorrect username!' });
                }
                let checkPassword = await bcrypt.compare(pw, user.f_Password);
                
                if (!checkPassword) {
                  return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            } catch (error) {
                console.log(error);
                return done(null, false);
            }
        }
    ));
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = initPassport;