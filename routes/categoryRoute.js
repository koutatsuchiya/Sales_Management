const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');
const cateModels = require('../models/cate');

const cateControllers = require('../controllers/cateCrud');

router.get('/', checkAuth.checkAuthenticated, cateControllers.loadCates);
router.post('/add', checkAuth.checkAuthenticated, cateControllers.addCate);
router.post('/edit', checkAuth.checkAuthenticated, cateControllers.editCate);
router.get('/delete', checkAuth.checkAuthenticated, cateControllers.delCate);
router.get('/google', checkAuth.checkAuthenticated, async (req, res, next) => {
    try {
        const cates = await cateModels.getCates();
        req.session.un = req.user.name.givenName;
        res.render("cate", {cateList: cates, userName: req.session.un});
    } catch (error) {
        next(error);
    }
});
router.get('/facebook', checkAuth.checkAuthenticated, async (req, res, next) => {
    try {
        const cates = await cateModels.getCates();
        req.session.un = req.user.displayName;
        res.render("cate", {cateList: cates, userName: req.session.un});
    } catch (error) {
        next(error);
    }
});

module.exports = router;