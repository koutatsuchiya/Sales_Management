const userModels = require('../models/user');


module.exports = {
    loginApp: async (req, res, next) => {
        try {
            req.session.uid = req.user.f_ID;
            req.session.un = req.user.f_Username;
            req.session.per = req.user.f_Permission;
            res.redirect("/category");
        } catch (error) {
            next(error);
        }
    }
}