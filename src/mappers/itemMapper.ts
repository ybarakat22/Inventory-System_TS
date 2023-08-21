import { ObjectId } from 'mongodb';
import { ItemDocument } from "../models/item";

interface ItemResponse {
  name: string;
  id: ObjectId;
}
export const ItemMapper = (items :ItemDocument[]): ItemResponse[] => {

  const itemResponses: ItemResponse[] = [];
  for (const item of items) {

    const itemResponse: ItemResponse = {
      name: item.name,
      id: item._id
    };
    itemResponses.push(itemResponse);
  }

  return itemResponses;
};
