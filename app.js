'use strict';
require('./node_modules/dotenv/lib/main').config();

import express from "express";
import consign from "consign";
import path from "path";
import favicon from "serve-favicon"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import serveIndex from "serve-index";
import logger from "morgan";

const app = express();





const env = process.env.ENV;
var port = process.env.PORT || '8081';
app.set('port', port);
// for res.json()
app.set("json spaces", 4);
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


consign()
    .include("libs/config.js")
    .then("db.js")
    .then("Routes")
    .then("libs/boot.js")
    .into(app);






module.exports = app;

