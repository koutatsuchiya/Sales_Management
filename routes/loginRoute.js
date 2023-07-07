const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkAuth = require('../utils/checkAuth');

const mainControllers = require('../controllers/login');

router.post('/', checkAuth.checkNotAuthenticated, passport.authenticate('local', { failureRedirect: '/' }), 
    mainControllers.loginApp);
router.get('/google', checkAuth.checkNotAuthenticated, passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/callback', checkAuth.checkNotAuthenticated, 
    passport.authenticate('google', {
        successRedirect: '/category/google',
        failureRedirect: '/'
    }
));
router.get('/facebook', checkAuth.checkNotAuthenticated, passport.authenticate('facebook'));
router.get('/facebook/callback', checkAuth.checkNotAuthenticated, 
    passport.authenticate('facebook', {
        successRedirect: '/category/facebook',
        failureRedirect: '/'
    }
));

module.exports = router;