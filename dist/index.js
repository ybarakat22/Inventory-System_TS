"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./database/server"));
const categoryRouter_1 = __importDefault(require("./routers/categoryRouter"));
const itemRouter_1 = __importDefault(require("./routers/itemRouter"));
const express = require("express");
const adminRouter_1 = __importDefault(require("./routers/adminRouter"));
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
(0, server_1.default)();
const app = express();
app.use(express.json());
app.use(categoryRouter_1.default);
app.use(itemRouter_1.default);
app.use('/admin', adminRouter_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is up on " + port);
});
