/****************************
 SERVER MAIN FILE
 ****************************/

let exp = require('express');
let path = require('path');
let i18n = require("i18n");

// let config = require('./configs/configs');
// let express = require('./configs/express');
// let mongoose = require('./configs/mongoose');

i18n.configure({
    locales: ['en', 'es', 'de'],
    directory: __dirname + '/app/locales',
    defaultLocale: 'en',
});

db = mongoose();
const app = express();

app.get('/', function (req, res, next) {
    res.send('hello world');
});

// Listening Server
app.listen(parseInt(config.serverPort), async () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log(`Server running at http://localhost:${config.serverPort}`);
});
