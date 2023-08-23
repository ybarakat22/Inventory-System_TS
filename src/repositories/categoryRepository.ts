import { Category ,ICategory} from "../models/category";
import { injectable, inject } from 'inversify';

@injectable()
export class CategoryRepository {

  public async create(data: ICategory) {
    return Category.create(data);
  }
  public async read() {
    return Category.find({});
  }
  public async delete(categoryId: string) {
    return Category.findByIdAndDelete({_id :categoryId});
  }
  public async show(categoryId: string) {
    return Category.findById({_id :categoryId});
  }

  async update(categoryId: string , name: string) {
 
    return Category.findByIdAndUpdate({_id :categoryId} , {name}, { new: true})
  }
};