"use strict";
exports.__esModule = true;
exports.ItemMapper = void 0;
var ItemMapper = function (items) {
    var itemResponses = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var itemResponse = {
            name: item.name,
            id: item._id
        };
        itemResponses.push(itemResponse);
    }
    return itemResponses;
};
exports.ItemMapper = ItemMapper;
