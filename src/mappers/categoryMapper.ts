import { ObjectId } from 'mongodb';

import { CategoryDocument } from "../models/category";

interface CategoryResponse {
  name: string;
  id: ObjectId;
}
export const categoryMapper = (category :CategoryDocument): CategoryResponse => {

  const categoryResponse:CategoryResponse = {
    name: category.name,
    id: category._id
  };
  return categoryResponse;
};
