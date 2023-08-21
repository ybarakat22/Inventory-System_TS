import express = require("express");
import { categoryMapper } from "../mappers/categoryMapper";
import { CategoryDocument } from "../models/category";

export function formatCategory(
  res: express.Response,
  rawCategoryData: CategoryDocument | null,
  isCreate: Boolean) {
  if (!rawCategoryData) {
    return res.status(404).send({ message: "Category not found" });
  }

  const category: CategoryDocument[] = [];
  category.push(rawCategoryData);

  const categoryResponse = categoryMapper(category);
  if (isCreate) {
    return res.status(201).send(categoryResponse);
  }
  return res.status(200).send(categoryResponse);
}
