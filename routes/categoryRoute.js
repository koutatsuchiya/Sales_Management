const express = require('express');
const router = express.Router();
const checkAuth = require('../utils/checkAuth');
const cateModels = require('../models/cate');
const userModels = require('../models/user');

const cateControllers = require('../controllers/cateCrud');

router.get('/', checkAuth.checkAuthenticated, cateControllers.loadCates);
router.post('/add', checkAuth.checkAuthenticated, cateControllers.addCate);
router.post('/edit', checkAuth.checkAuthenticated, cateControllers.editCate);
router.get('/delete', checkAuth.checkAuthenticated, cateControllers.delCate);
router.get('/google', checkAuth.checkAuthenticated, async (req, res, next) => {
    try {
        const cates = await cateModels.getCates();
        req.session.un = req.user.name.givenName;
        const u = await userModels.getUser(req.session.un);
        req.session.uid = u.f_ID;
        res.render("cate", {cateList: cates, userName: req.session.un});
    } catch (error) {
        next(error);
    }
});
router.get('/facebook', checkAuth.checkAuthenticated, async (req, res, next) => {
    try {
        const cates = await cateModels.getCates();
        req.session.un = req.user.displayName;
        const u = await userModels.getUser(req.session.un);
        req.session.uid = u.f_ID;
        res.render("cate", {cateList: cates, userName: req.session.un});
    } catch (error) {
        next(error);
    }
});

module.exports = router;