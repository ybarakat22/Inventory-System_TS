"use strict";
exports.__esModule = true;
var server_1 = require("./database/server");
var categoryRouter_1 = require("./routers/categoryRouter");
var itemRouter_1 = require("./routers/itemRouter");
var express = require("express");
var adminRouter_1 = require("./routers/adminRouter");
var dotenv = require('dotenv');
dotenv.config({ path: './.env' });
(0, server_1["default"])();
var app = express();
app.use(express.json());
app.use(categoryRouter_1["default"]);
app.use(itemRouter_1["default"]);
app.use('/admin', adminRouter_1["default"]);
var port = process.env.PORT;
app.listen(port, function () {
    console.log("Server is up on " + port);
});
