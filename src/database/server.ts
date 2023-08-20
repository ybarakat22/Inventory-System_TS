import * as Mongoose from "mongoose";

export default async function startServer() {
  await Mongoose.connect("mongodb://localhost:27017/inventory-system");

  console.log("Connected to mongoose Sucessfully!");
}