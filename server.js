const express = require('express');
const ejs = require("ejs");
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const mongoConnect = require('./util/database').mongoConnect;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
 res.status(404).render("404");
});

mongoConnect(() => {
    app.listen(3000);
})
