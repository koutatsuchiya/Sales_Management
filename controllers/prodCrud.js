const prodModels = require('../models/prod');
const cateModels = require('../models/cate');
const saveUploaded = require('../utils/saveUploaded');


module.exports = {
    loadProductsWithCate: async (req, res, next) => {
        try {
            const dataset = await prodModels.getProdsWithCate(req.query.catid);
            const len = dataset.length;
            //consider each page has r products
            const r = 2;
            //page handling
            let total_pages = Math.ceil(len / r);
            let page;
            if (req.query.page && req.query.page <= total_pages) { 
                page = Number.parseInt(req.query.page); 
            } else { 
                page = 1; 
            }
            let page_items = [];
            for (let i = 0; i < total_pages; i++) {
                if (i + 1 === page) {
                    page_items.push({value: i + 1, isActive: true});
                } else {
                    page_items.push({value: i + 1, isActive: false});
                }
            }
            //get subset for cur page
            const prodList = [];
            for (let i = r * (page - 1); i < page * r && i < len; i++) {
                prodList.push(dataset[i])
            }
            res.render("prod", {catName: req.query.catname, catId: req.query.catid, prodList: prodList, page_items: page_items, userName: req.session.un, per: req.session.per});
        } catch (error) {
            next(error);
        }
    },
    addProd: async (req, res, next) => {
        try {
            const maxProdId = await prodModels.maxProdId();
            await prodModels.add(maxProdId.max + 1, req.body.pName, req.body.pTiny, req.body.pFull, 
                Number.parseInt(req.body.pPrice), Number.parseInt(req.body.pCatid), Number.parseInt(req.body.pQuan));
            //save img file
            if (req.files) {
                saveUploaded.saveFile(req.files.pImg, maxProdId.max + 1);
            }
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    },
    loadEditProd: async (req, res, next) => {
        try {
            const p = await prodModels.getProd(req.query.proid);
            const c = await cateModels.getCates();
            let curCate;
            for (let i = 0; i < c.length; i++) {
                if (p.CatID === c[i].CatID) {
                    curCate = c[i];
                    c.splice(i, 1);
                    break;
                }
            }
            //console.log(c);
            res.render("editProd", {p: p, referer: req.headers.referer, userName: req.session.un, curCate: curCate, otherCate: c});
        } catch (error) {
            console.log(error);
        }
    },
    updateProd: async (req, res, next) => {
        try {
            await prodModels.update(Number.parseInt(req.body.proid), req.body.pName, req.body.pTiny, 
                req.body.pFull, Number.parseInt(req.body.pPrice), Number.parseInt(req.body.catSel), 
                Number.parseInt(req.body.pQuan));
            //save img file
            if (req.files) {
                saveUploaded.saveFile(req.files.pImg, req.body.proid)
            }
            res.redirect(req.body.referer);
        } catch (error) {
            next(error);
        }
    },
    delProd: async (req, res, next) => {
        try {
            await prodModels.delete(req.query.proid);
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}