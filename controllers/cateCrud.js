const cateModels = require('../models/cate');


module.exports = {
    loadCates: async (req, res, next) => {
        try {
            const cates = await cateModels.getCates();
            res.render("cate", {cateList: cates, userName: req.session.un, per: req.session.per});
        } catch (error) {
            next(error);
        }
    },
    addCate: async (req, res, next) => {
        try {
            await cateModels.add(req.body.newCate);
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    },
    editCate: async (req, res, next) => {
        try {
            await cateModels.update(req.query.catid, req.body.newCatName)
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    },
    delCate: async (req, res, next) => {
        try {
            await cateModels.delete(req.query.catid);
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}