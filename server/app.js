const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
// const flash = require("connect-flash");

const rootDir = require("./src/util/path");
const adminRoutes = require("./src/api/routes/admin");
const shopRoutes = require("./src/api/routes/shop");
const authRoutes = require("./src/api/routes/auth");
const User = require("./src/api/models/user");
const errorController = require("./src/api/controllers/error");
const { collections } = require("./src/util/collections");
const { mongoDBUri } = require("./src/util/config");

const app = express();

const csrfProtection = csrf();

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({ uri: mongoDBUri, collection: collections.SESSIONS })
}));
app.use(csrfProtection);
// app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }

    User.findById(req.session.user._id)
        .then((user) => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch((err) => {
            throw new Error(err);
        });
});

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.set("view engine", "pug");
app.set("views", "views");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);

app.use((error, req, res) => {
    res.status(500)
        .render("500", { pageTitle: "500 | Something went wrong" })
});

mongoose.connect(mongoDBUri)
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => {

        console.log("mongoDBUri", mongoDBUri);
        console.log(err);
    });


