import express = require("express");
import {} from "@decorators/express";

import { CategoryRepository } from "../repositories/categoryRepository";
import { CategoryMapper } from "../mappers/categoryMapper";
import { formatCategory } from "../utils/helper";
import {
  controller,
  httpGet,
  httpPost,
  httpDelete,
  httpPatch,
  next,
} from "inversify-express-utils";
import { inject } from "inversify";
import { ValidationMiddleware } from "../middleware/validationMiddleware";

@controller("/categories")
class CategoryController {
  constructor(
    @inject("CategoryRepository")
    private readonly categoryRepository: CategoryRepository
  ) {}

  @httpPost("/", ValidationMiddleware.validateInput)
  public async createCategory(req: express.Request, res: express.Response) {
    try {
      const { name } = req.body;
      const rawCategoryData = await this.categoryRepository.create({ name });

      formatCategory(res, rawCategoryData, true);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }
  @httpGet("/")
  public async readCategories(req: express.Request, res: express.Response) {
    try {
      const categories = await this.categoryRepository.read();
      const categoryResponses = CategoryMapper(categories);

      res.status(200).send(categoryResponses);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpDelete("/:id", ValidationMiddleware.validateId)
  public async deleteCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await this.categoryRepository.delete(categoryId);

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpGet("/:id", ValidationMiddleware.validateId)
  public async readCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;

      const rawCategoryData = await this.categoryRepository.show(categoryId);

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpPatch(
    "/:id",
    ValidationMiddleware.validateId,
    ValidationMiddleware.validateInput
  )
  public async updateCategory(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawCategoryData = await this.categoryRepository.update(
        categoryId,
        req.body.name
      );

      formatCategory(res, rawCategoryData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }
}
export { CategoryController };
