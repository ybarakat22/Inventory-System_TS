import startServer from "./database/server";
import CategoryRouter from "./routers/categoryRouter";
import ItemRouter from "./routers/itemRouter";
import express = require("express");

startServer();

const app = express();
app.use(express.json());
app.use(CategoryRouter);
app.use(ItemRouter);

const PORT = 3000
app.listen(PORT, () => {
  console.log("Server is up on "+PORT);
});