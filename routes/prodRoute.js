const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');

const prodControllers = require('../controllers/prodCrud');

router.get('/', checkAuth.checkAuthenticated, prodControllers.loadProductsWithCate);
router.post('/add', checkAuth.checkAuthenticated, prodControllers.addProd);
router.get('/edit', checkAuth.checkAuthenticated, prodControllers.loadEditProd);
router.post('/edit/update', checkAuth.checkAuthenticated, prodControllers.updateProd);
router.get('/delete', checkAuth.checkAuthenticated, prodControllers.delProd);

module.exports = router;