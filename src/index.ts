// import CategoryRouter from "./routers/categoryRouter";
// import ItemRouter from "./routers/itemRouter";
// import express = require("express");

// const app = express();
// app.use(express.json());
// app.use(CategoryRouter);
// app.use(ItemRouter);

// app.listen(port, () => {
//   console.log("Server is up on "+port);
// });


import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import startServer from "./database/server";
const dotenv = require('dotenv')
import adminRouter from './routers/adminRouter'


dotenv.config({ path: './.env' })

startServer();

const app = express();
app.use(express.json())
app.use('/admin', adminRouter)

const port = process.env.PORT

const server = new InversifyExpressServer(container, null, { rootPath: '' }, app);
server.build().listen(port, () => {
  console.log('Server listening on port '+port);
});
