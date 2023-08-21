"use strict";
exports.__esModule = true;
exports.formatCategory = void 0;
var categoryMapper_1 = require("../mappers/categoryMapper");
function formatCategory(res, rawCategoryData, isCreate) {
    if (!rawCategoryData) {
        return res.status(404).send({ message: "Category not found" });
    }
    var category = [];
    category.push(rawCategoryData);
    var categoryResponse = (0, categoryMapper_1.categoryMapper)(category);
    if (isCreate) {
        return res.status(201).send(categoryResponse);
    }
    return res.status(200).send(categoryResponse);
}
exports.formatCategory = formatCategory;
