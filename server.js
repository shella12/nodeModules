const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const mongoConnect = require('./util/database');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).sendFile(path.join(rootDir,'/views/404.html'));
});
mongoConnect((client) => {
    console.log(client);
    app.listen(3000);
})
