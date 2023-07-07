

module.exports = {
    backHome: async (req, res) => {
        res.redirect('/category');
    },
    signOut: async (req, res) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            req.session.destroy();
            res.redirect('/');
        });
    }
}