import * as Mongoose from "mongoose";
import { ObjectId } from 'mongodb';

export type CategoryDocument = {
  _id: ObjectId ;
  name: string;
};
interface ICategory {
  name: string;
}

const categorySchema = new Mongoose.Schema<ICategory>({
  name: { type: String, required: true },
});

const Category = Mongoose.model<ICategory>("Category", categorySchema);
export { Category, ICategory };