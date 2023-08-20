import express = require("express");
import { CategoryRepository } from "../repositories/categoryRepository";
import { categoryMapper } from "../mappers/categoryMapper";

export const CategoryController = {
  async createCategory(req: express.Request, res: express.Response) {
    try {

      const { name } = req.body;
      const category = await CategoryRepository.create({ name });
      const categoryResponse = categoryMapper(category);

      res.status(201).send(categoryResponse);
    } catch (error) {
      
      res.status(500).send({ message: "Server Error" });
    }
  },
};