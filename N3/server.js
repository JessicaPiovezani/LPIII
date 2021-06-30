require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const wineController = require('./controller/wineController');
const { extname } = require('path');

var app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views'));

app.engine('hbs', expressHandlebars({
    extname:'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views'
}));

app.set('view engine', 'hbs');

app.listen(5000, () => {
    console.log("Servidor em execução na porta 5000")
});

app.use('/',wineController);