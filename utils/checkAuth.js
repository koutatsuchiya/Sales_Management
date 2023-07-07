

module.exports = {
    checkAuthenticated: (req, res, next) => {
        if (req.user) {
            return next();
        }
        res.redirect('/');
    },
    checkNotAuthenticated: (req, res, next) => {
        if (req.user) {
            res.redirect('/category');
        }
        next();
    }
}