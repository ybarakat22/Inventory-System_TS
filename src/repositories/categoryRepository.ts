import { Category ,ICategory} from "../models/category";
import express = require("express");

export const CategoryRepository = {

  async create(data: ICategory) {
    return Category.create(data);
  },
  async read() {
    return Category.find({});
  },
  async delete(categoryId: string) {
    return Category.findByIdAndDelete({_id :categoryId});
  },
  async show(categoryId: string) {
    return Category.findById({_id :categoryId});
  },

  async update(categoryId: string , name: string) {
 
    return Category.findByIdAndUpdate({_id :categoryId} , {name}, { new: true})
  },
};