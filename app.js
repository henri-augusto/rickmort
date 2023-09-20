const express = require('express');
const router = require('./routers/apiRouter');
const path = require('path');

app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/api/v1', router);

module.exports = app;
