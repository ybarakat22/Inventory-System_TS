"use strict";
exports.__esModule = true;
var server_1 = require("./database/server");
var categoryRouter_1 = require("./routers/categoryRouter");
var express = require("express");
(0, server_1["default"])();
var app = express();
app.use(express.json());
app.use(categoryRouter_1["default"]);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is up on " + PORT);
});
