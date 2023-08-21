"use strict";
exports.__esModule = true;
exports.CategoryMapper = void 0;
var CategoryMapper = function (categories) {
    var categoryResponses = [];
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        var categoryResponse = {
            name: category.name,
            id: category._id
        };
        categoryResponses.push(categoryResponse);
    }
    return categoryResponses;
};
exports.CategoryMapper = CategoryMapper;
