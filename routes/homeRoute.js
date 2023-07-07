const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');

const homeControllers = require('../controllers/homeOrOut');

router.get('/', checkAuth.checkAuthenticated, homeControllers.backHome);

module.exports = router;