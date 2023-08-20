"use strict";
exports.__esModule = true;
exports.Category = void 0;
var Mongoose = require("mongoose");
var categorySchema = new Mongoose.Schema({
    name: { type: String, required: true }
});
var Category = Mongoose.model("Category", categorySchema);
exports.Category = Category;
