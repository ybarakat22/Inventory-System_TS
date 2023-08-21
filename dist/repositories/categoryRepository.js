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
exports.CategoryRepository = void 0;
const category_1 = require("../models/category");
exports.CategoryRepository = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return category_1.Category.create(data);
        });
    },
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            return category_1.Category.find({});
        });
    },
    delete(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return category_1.Category.findByIdAndDelete({ _id: categoryId });
        });
    },
    show(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return category_1.Category.findById({ _id: categoryId });
        });
    },
    update(categoryId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return category_1.Category.findByIdAndUpdate({ _id: categoryId }, { name }, { new: true });
        });
    },
};
