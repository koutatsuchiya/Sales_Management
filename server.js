const express = require('express');
const handlebars = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const initPassportLocal = require('./configs/passport-cfg');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(fileUpload());

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutsDir:`views/layouts/`,
    defaultLayout: 'index',
    extname: 'hbs',
    partialsDir: 'views/partials/'
}));


//app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'liverpool',
    resave: false,
    saveUninitialized: true
}))

initPassportLocal();
require('./configs/ppGgAuth2');
require('./configs/ppFb');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

const checkAuth = require('./utils/checkAuth');

app.get('/', checkAuth.checkNotAuthenticated, (req, res) => {
    res.render("login");
});

const loginRoute = require('./routes/loginRoute');
app.use('/user', loginRoute);

const signupRoute = require('./routes/signupRoute');
app.use('/signup', signupRoute);

const prodRoute = require('./routes/prodRoute');
app.use('/products', prodRoute);

const categoryRoute = require('./routes/categoryRoute');
app.use('/category', categoryRoute);

const orderRoute = require('./routes/orderRoute');
app.use('/orders', orderRoute);

const homeRoute = require('./routes/homeRoute');
app.use('/home', homeRoute);

const signoutRoute = require('./routes/signoutRoute');
app.use('/signout', signoutRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
  