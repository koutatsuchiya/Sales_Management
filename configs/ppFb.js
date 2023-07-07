const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const userModels = require('../models/user');
const dateTimeUtils = require('../utils/datetime');

const FACEBOOK_APP_ID = "893077302058244";
const FACEBOOK_APP_SECRET = "2d5e5b08eb4b1c79b60ae74c537152c9";

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/user/facebook/callback",
    profileFields: ['id', 'email', 'displayName'] // Request additional fields here
    }, async function(accessToken, refreshToken, profile, cb) {
        const email = profile.emails[0].value;
        let user = await userModels.getUserByEmail(email);
        if (!user) {
            const dateRegister = dateTimeUtils.getFullDate(new Date());
            await userModels.signup(profile.displayName, 'none', profile.displayName, email, dateRegister);
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