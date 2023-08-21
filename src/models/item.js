"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Mongoose = require("mongoose");
var itemSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    categoryId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
});
var Item = Mongoose.model("Item", itemSchema);
exports.Item = Item;
