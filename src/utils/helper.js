"use strict";
exports.__esModule = true;
exports.formatItem = exports.formatCategory = void 0;
var categoryMapper_1 = require("../mappers/categoryMapper");
var itemMapper_1 = require("../mappers/itemMapper");
function formatCategory(res, rawCategoryData, isCreate) {
    if (!rawCategoryData) {
        return res.status(404).send({ message: "Category not found" });
    }
    var category = [];
    category.push(rawCategoryData);
    var categoryResponse = (0, categoryMapper_1.CategoryMapper)(category);
    if (isCreate) {
        return res.status(201).send(categoryResponse);
    }
    return res.status(200).send(categoryResponse);
}
exports.formatCategory = formatCategory;
function formatItem(res, rawItemData, isCreate) {
    if (!rawItemData) {
        return res.status(404).send({ message: "Item not found" });
    }
    var item = [];
    item.push(rawItemData);
    var itemResponse = (0, itemMapper_1.ItemMapper)(item);
    if (isCreate) {
        return res.status(201).send(itemResponse);
    }
    return res.status(200).send(itemResponse);
}
exports.formatItem = formatItem;
