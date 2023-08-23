import express = require("express");
import { ItemRepository } from "../repositories/itemRepository";
import { ItemMapper } from "../mappers/itemMapper";
import { formatItem } from "../utils/helper";
import { controller, httpGet, httpPost , httpDelete , httpPatch, next } from 'inversify-express-utils';
import { inject } from "inversify";
import { ValidationMiddleware } from "../middleware/validationMiddleware";

@controller('/items')
export class ItemController  {

  constructor(@inject('ItemRepository') private readonly itemRepository: ItemRepository) {}

  @httpPost('/',ValidationMiddleware.validateInput,ValidationMiddleware.validateReferenceId,ValidationMiddleware.validateCategoryReference)
  async createItem(req: express.Request, res: express.Response) {
    try {
      const { name , categoryId} = req.body;
      const rawItemData = await this.itemRepository.create({ name ,categoryId});

      formatItem(res, rawItemData, true);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }
  
  @httpGet('/')
  async readItems(req: express.Request, res: express.Response) {
    try {
      const items = await this.itemRepository.read();
      const itemResponses = ItemMapper(items);

      res.status(200).send(itemResponses);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpDelete('/:id',ValidationMiddleware.validateId)

  async deleteItem(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawItemData = await this.itemRepository.delete(categoryId);

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpGet('/:id',ValidationMiddleware.validateId)
  async readItem(req: express.Request, res: express.Response) {
    try {
      const itemId: string = req.params.id;

      const rawItemData = await this.itemRepository.show(itemId);

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }

  @httpPatch('/:id',ValidationMiddleware.validateId , ValidationMiddleware.validateInput)
  async updateItem(req: express.Request, res: express.Response) {
    try {
      const itemId: string = req.params.id;
      const rawItemData = await this.itemRepository.update(
        itemId,
        req.body.name
      );

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  }
};
