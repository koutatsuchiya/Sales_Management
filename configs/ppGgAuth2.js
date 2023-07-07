const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userModels = require('../models/user');
const dateTimeUtils = require('../utils/datetime');

const GOOGLE_CLIENT_ID = "1003021725419-19j1ge9q2ouebr5s0316ukmhon13qldp.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/user/google/callback",
    passReqToCallback: true
    },async function(req, accessToken, refreshToken, profile, cb) {
        const email = profile.emails[0].value;
        let user = await userModels.getUserByEmail(email);
        if (!user) {
            const dateRegister = dateTimeUtils.getFullDate(new Date());
            await userModels.signup(profile.name.givenName, 'none', profile.displayName, email, dateRegister);
        }
        return cb(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});