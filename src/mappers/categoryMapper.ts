import { ObjectId } from 'mongodb';

import { CategoryDocument } from "../models/category";

interface CategoryResponse {
  name: string;
  id: ObjectId;
}
export const categoryMapper = (categories :CategoryDocument[]): CategoryResponse[] => {

  const categoryResponses: CategoryResponse[] = [];
  for (const category of categories) {

    const categoryResponse: CategoryResponse = {
      name: category.name,
      id: category._id
    };
    categoryResponses.push(categoryResponse);
  }

  return categoryResponses;
};
