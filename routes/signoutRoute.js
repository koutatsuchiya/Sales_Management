const express = require('express');
const router = express.Router();

const signoutControllers = require('../controllers/homeOrOut');

router.get('/', signoutControllers.signOut);

module.exports = router;