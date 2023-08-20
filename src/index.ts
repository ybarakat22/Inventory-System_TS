import startServer from "./database/server";
import CategoryRouter from "./routers/categoryRouter";
import express = require("express");

startServer();

const app = express();
app.use(express.json());
app.use(CategoryRouter);

const PORT = 3000
app.listen(PORT, () => {
  console.log("Server is up on "+PORT);
});