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
      category.push(rawCategoryData);

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

  async deleteCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await CategoryRepository.delete(categoryId);

      if (!rawCategoryData) {
        return res.status(404).send({message: 'Category not found'});
      }

      const category: CategoryDocument[] = [];
      category.push(rawCategoryData)

      const categoryResponse = categoryMapper(category);

      res.status(200).send(categoryResponse);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async readCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await CategoryRepository.show(categoryId);

      if (!rawCategoryData) {
        return res.status(404).send({message: 'Category not found'});
      }

      const category: CategoryDocument[] = [];
      category.push(rawCategoryData)

      const categoryResponse = categoryMapper(category);

      res.status(200).send(categoryResponse);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async updateCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await CategoryRepository.update(categoryId , req.body.name);

      if (!rawCategoryData) {
        return res.status(404).send({message: 'Category not found'});
      }
      const category: CategoryDocument[] = [];
      category.push(rawCategoryData)

      const categoryResponse = categoryMapper(category);

      res.status(200).send(categoryResponse);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },
};
