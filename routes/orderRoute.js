const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');

const orderControllers = require('../controllers/orderCrud');

router.get('/', checkAuth.checkAuthenticated, orderControllers.loadProductsWithCate);
router.post('/add', checkAuth.checkAuthenticated, orderControllers.createOrder);
router.get('/list', checkAuth.checkAuthenticated, orderControllers.getOrders);
router.get('/details', checkAuth.checkAuthenticated, orderControllers.getOrderDetails);

module.exports = router;