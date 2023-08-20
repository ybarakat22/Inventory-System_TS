"use strict";
exports.__esModule = true;
exports.categoryMapper = void 0;
var categoryMapper = function (category) {
    var categoryResponse = {
        name: category.name,
        id: category._id
    };
    return categoryResponse;
};
exports.categoryMapper = categoryMapper;
