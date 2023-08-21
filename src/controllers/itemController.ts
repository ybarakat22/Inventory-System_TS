import express = require("express");
import { ItemRepository } from "../repositories/itemRepository";
import { ItemMapper } from "../mappers/itemMapper";
import { formatItem } from "../utils/helper";

export const ItemController = {
  async createItem(req: express.Request, res: express.Response) {
    try {
      const { name , categoryId} = req.body;
      const rawItemData = await ItemRepository.create({ name ,categoryId});

      formatItem(res, rawItemData, true);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async readItems(req: express.Request, res: express.Response) {
    try {
      const items = await ItemRepository.read();
      const itemResponses = ItemMapper(items);

      res.status(200).send(itemResponses);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async deleteItem(req: express.Request, res: express.Response) {
    try {
      const categoryId: string = req.params.id;
      const rawItemData = await ItemRepository.delete(categoryId);

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async readItem(req: express.Request, res: express.Response) {
    try {
      const itemId: string = req.params.id;

      const rawItemData = await ItemRepository.show(itemId);

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },

  async updateItem(req: express.Request, res: express.Response) {
    try {
      const itemId: string = req.params.id;
      const rawItemData = await ItemRepository.update(
        itemId,
        req.body.name
      );

      formatItem(res, rawItemData, false);
    } catch (error) {
      res.status(500).send({ message: "Server Error" });
    }
  },
};
