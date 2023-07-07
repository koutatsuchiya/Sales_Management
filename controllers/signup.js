const userModels = require('../models/user');
const dateTimeUtils = require('../utils/datetime');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    loadSignUpPage: async (req, res, next) => {
        try {
            res.render("signup");
        } catch (error) {
            next(error);
        }
    },
    signupAcc: async (req, res, next) => {
        try {
            const dateRegister = dateTimeUtils.getFullDate(new Date());
            
            bcrypt.hash(req.body.pw, saltRounds, async function(err, hashed_pw) {
                if (err) { next(err); }
                // if the there r already an account with that email and pw is none (which mean they 
                // just only added the accout with gg or fb), update un and pw
                const user = await userModels.getUserByEmail(req.body.email);
                let success = false;
                if (user) {
                    if (user.f_Password == 'none') {
                        success = await userModels.updateByEmail(req.body.un, hashed_pw, req.body.name, req.body.email)
                    }
                }
                // else signup new acc
                else if (!success) {
                    await userModels.signup(req.body.un, hashed_pw, req.body.name, req.body.email, dateRegister);
                }
            });
            res.redirect("/");
        } catch (error) {
            next(error);
        }
    }
}