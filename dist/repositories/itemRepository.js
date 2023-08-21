"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepository = void 0;
const item_1 = require("../models/item");
exports.ItemRepository = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return item_1.Item.create(data);
        });
    },
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            return item_1.Item.find({});
        });
    },
    delete(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return item_1.Item.findByIdAndDelete({ _id: itemId });
        });
    },
    show(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return item_1.Item.findById({ _id: itemId });
        });
    },
    update(itemId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return item_1.Item.findByIdAndUpdate({ _id: itemId }, { name }, { new: true });
        });
    },
};
