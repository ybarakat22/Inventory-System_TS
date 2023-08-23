"use strict";
// import CategoryRouter from "./routers/categoryRouter";
// import ItemRouter from "./routers/itemRouter";
// import express = require("express");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(express.json());
// app.use(CategoryRouter);
// app.use(ItemRouter);
// app.listen(port, () => {
//   console.log("Server is up on "+port);
// });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = require("./inversify.config");
const server_1 = __importDefault(require("./database/server"));
const dotenv = require('dotenv');
const adminRouter_1 = __importDefault(require("./routers/adminRouter"));
dotenv.config({ path: './.env' });
(0, server_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/admin', adminRouter_1.default);
const port = process.env.PORT;
const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container, null, { rootPath: '' }, app);
server.build().listen(port, () => {
    console.log('Server listening on port ' + port);
});
