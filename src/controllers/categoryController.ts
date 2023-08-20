import express = require("express");
import { CategoryRepository } from "../repositories/categoryRepository";
import { categoryMapper } from "../mappers/categoryMapper";
import { CategoryDocument } from "../models/category";

export const CategoryController = {
  async createCategory(req: express.Request, res: express.Response) {
    try {

      const { name } = req.body;
      const rawCategoryData = await CategoryRepository.create({ name });

      const category: CategoryDocument[] = [];
      category.push(rawCategoryData)

      const categoryResponse = categoryMapper(category);

      res.status(201).send(categoryResponse);
    } catch (error) {

      res.status(500).send({ message: "Server Error" });
    }
  },

  async readCategories(req: express.Request, res: express.Response) {
    try {

      const categories = await CategoryRepository.read();
      const categoryResponses = categoryMapper(categories);

      res.status(201).send(categoryResponses);
    } catch (error) {
      
      res.status(500).send({ message: "Server Error" });
    }
  },
};