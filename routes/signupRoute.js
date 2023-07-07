const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');

const signupControllers = require('../controllers/signup');

router.get('/', checkAuth.checkNotAuthenticated, signupControllers.loadSignUpPage);
router.post('/user', checkAuth.checkNotAuthenticated, signupControllers.signupAcc);

module.exports = router;