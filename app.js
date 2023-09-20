const express = require('express');
const router = require('./routers/apiRouter');

app = express();

app.use(express.json());

app.set(express.static(`${__dirname}/public`));

app.use('/api/v1', router);

module.exports = app;
