import startServer from "./database/server";
import CategoryRouter from "./routers/categoryRouter";
import ItemRouter from "./routers/itemRouter";
import express = require("express");
import adminRouter from './routers/adminRouter'
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

startServer();

const app = express();
app.use(express.json());
app.use(CategoryRouter);
app.use(ItemRouter);
app.use('/admin', adminRouter)

const port = process.env.PORT
app.listen(port, () => {
  console.log("Server is up on "+port);
});