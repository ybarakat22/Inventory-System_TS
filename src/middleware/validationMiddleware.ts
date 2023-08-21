import express = require("express");
import { Category } from "../models/category";
import { CategoryRepository } from "../repositories/categoryRepository";

export const validationMiddleware = {
  validateInput(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const name = req.body.name;
    if (!name) {
      return res.status(400).json({ message: "Invalid input" });
    }
    next();
  },
  validateId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const id = req.params.id;

    const validIdRegex = /^[0-9a-fA-F]{24}$/;

    if (!validIdRegex.test(id)) {
      return res.status(400).send({ message: "Invalid Object Id" });
    }
    next();
  },
  async validateCategoryReference(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    
    const id = req.body.categoryId;
    if (!id) {
      return res.status(404).send({ message: "Missing categoryId parameter" });
    }

    const category = await CategoryRepository.show(id);
    if (!category) {
      return res.status(400).send({ message: "Invalid Category Refrence" });
    }

    next();
  },
};
