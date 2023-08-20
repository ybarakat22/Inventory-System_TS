import express = require("express");
import { Category } from "../models/category";

export const validationMiddleware = {

validateInput (req: express.Request, res: express.Response,next: express.NextFunction) {

  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ message: "Invalid input" });
  }
  next();
} ,

async validateId (req: express.Request,res: express.Response,next: express.NextFunction) {
  const id = req.params.id;

  const category = await Category.findOne({ _id: id });
  if (!category) {
    return res.status(404).send({ message: "This object Id is invalid" });
  }
  next();
}

}


