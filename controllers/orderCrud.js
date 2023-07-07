const prodModels = require('../models/prod');
const orderModels = require('../models/order');
const orderDetailModels = require('../models/orderDetail');
const dateUtils = require('../utils/datetime');


module.exports = {
    loadProductsWithCate: async (req, res, next) => {
        try {
            const prodList = await prodModels.getProdsWithCate(req.query.catid);
            res.render("order", {catName: req.query.catname, catId: req.query.catid, prodList: prodList, userName: req.session.un});
        } catch (error) {
            next(error);
        }
    },
    createOrder: async (req, res, next) => {
        try {
            //new order
            let newOrder = await orderModels.maxOrderId();
            if (newOrder.max == null) newOrder.max = 1;
            else newOrder.max = newOrder.max + 1;
            await orderModels.add(newOrder.max, dateUtils.getFullDate(new Date()), req.session.uid);
            
            //new order details
            let orders = req.body.order;
            //console.log(orders);
            for (const o of orders) {
                //update quantity of prod
                await prodModels.decreaseQuan(o.pid, o.quan);
                //add order details
                let newOrderDetail = await orderDetailModels.maxOrderDetailsId();
                if (newOrderDetail == null) newOrderDetail.max = 1;
                else newOrderDetail.max = newOrderDetail.max + 1;
                await orderDetailModels.add(newOrderDetail.max, newOrder.max, o.pid, o.quan, o.price, 
                    o.quan * o.price);
            }
            orderModels.updateTotal(newOrder.max);
            res.send("success");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getOrders: async (req, res, next) => {
        try {
            const oList = await orderModels.getOrders(req.session.uid);
            res.render('oList', {oList: oList, userName: req.session.un});
        } catch (error) {
            next(error);
        }
    },
    getOrderDetails: async (req, res, next) => {
        try {
            const tempOd = await orderDetailModels.getOrderDetails(req.query.oid);
            //map the list to add some porduct properties
            const odList = await Promise.all(
                tempOd.map(async (od) => {
                    const p = await prodModels.getProd(od.ProID);
                    return {
                        ...od,
                        ProName: p.ProName,
                        TinyDes: p.TinyDes,
                        FullDes: p.FullDes
                    };
                })
            );
            res.render('oDetails', {oid: req.query.oid, odList: odList, userName: req.session.un});
        } catch (error) {
            
        }
    }
}