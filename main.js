const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const express = require('express');
const sanitizeHtml = require('sanitize-html');
const bodyParser = require('body-parser');
const compression = require('compression');

// const template = require('./lib/template');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());

app.get('/', (req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.end('완성');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});