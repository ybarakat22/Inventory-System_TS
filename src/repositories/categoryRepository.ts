import { Category ,ICategory} from "../models/category";

export const CategoryRepository = {
  async create(data: ICategory) {
    return Category.create(data);
  },
};