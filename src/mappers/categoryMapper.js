"use strict";
exports.__esModule = true;
exports.categoryMapper = void 0;
var categoryMapper = function (categories) {
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
exports.categoryMapper = categoryMapper;
