import * as Mongoose from "mongoose";
import { ObjectId } from "mongodb";

export type ItemDocument = {
  _id: ObjectId;
  name: string;
  categoryId: Mongoose.Schema.Types.ObjectId;
};
interface IItem {
  name: string;
  categoryId: Mongoose.Schema.Types.ObjectId;
}

const itemSchema = new Mongoose.Schema<IItem>({
  name: { type: String, required: true },
  categoryId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Item = Mongoose.model<IItem>("Item", itemSchema);
export { Item, IItem };
