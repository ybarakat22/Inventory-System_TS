import express = require("express");
import { CategoryMapper } from "../mappers/categoryMapper";
import { CategoryDocument } from "../models/category";
import { ItemDocument } from "../models/item";
import { ItemMapper } from "../mappers/itemMapper";


export function formatCategory(
  res: express.Response,
  rawCategoryData: CategoryDocument | null,
  isCreate: Boolean) {
  if (!rawCategoryData) {
    return res.status(404).send({ message: "Category not found" });
  }

  const category: CategoryDocument[] = [];
  category.push(rawCategoryData);

  const categoryResponse = CategoryMapper(category);
  if (isCreate) {
    return res.status(201).send(categoryResponse);
  }
  return res.status(200).send(categoryResponse);
}

export function formatItem(
  res: express.Response,
  rawItemData: ItemDocument | null,
  isCreate: Boolean) {
  if (!rawItemData) {
    return res.status(404).send({ message: "Item not found" });
  }

  const item: ItemDocument[] = [];
  item.push(rawItemData);

  const itemResponse = ItemMapper(item);
  if (isCreate) {
    return res.status(201).send(itemResponse);
  }
  return res.status(200).send(itemResponse);
}
