import express = require("express");
import { CategoryRepository } from "../repositories/categoryRepository";
import { CategoryMapper } from "../mappers/categoryMapper";
import { formatCategory } from "../utils/helper";

export const CategoryController = {
  async createCategory(req: express.Request, res: express.Response) {
    try {
      const { name } = req.body;
      const rawCategoryData = await CategoryRepository.create({ name });

      formatCategory(res, rawCategoryData, true);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async readCategories(req: express.Request, res: express.Response) {
    try {
      const categories = await CategoryRepository.read();
      const categoryResponses = CategoryMapper(categories);

      res.status(200).send(categoryResponses);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async deleteCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await CategoryRepository.delete(categoryId);

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async readCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;

      const rawCategoryData = await CategoryRepository.show(categoryId);

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async updateCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await CategoryRepository.update(
        categoryId,
        req.body.name
      );

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },
};
