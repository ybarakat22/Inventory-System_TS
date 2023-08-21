import { Item ,IItem} from "../models/item";
import express = require("express");

export const ItemRepository = {

  async create(data: IItem) {
    return Item.create(data);
  },
  async read() {
    return Item.find({});
  },
  async delete(itemId: string) {
    return Item.findByIdAndDelete({_id :itemId});
  },
  async show(itemId: string) {
    return Item.findById({_id :itemId});
  },

  async update(itemId: string , name: string) {
 
    return Item.findByIdAndUpdate({_id :itemId} , {name}, { new: true})
  },
};