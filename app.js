'use strict';
require('./node_modules/dotenv/lib/main').config();
import express from "express";
import consign from "consign";


const app = express();
var port = process.env.PORT || '8081';

app.set('port', port);



consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middleware.js")
    .then("Routes")
    .then("libs/boot.js")
    .into(app);

module.exports = app;

