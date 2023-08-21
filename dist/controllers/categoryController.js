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
exports.CategoryController = void 0;
const categoryRepository_1 = require("../repositories/categoryRepository");
const categoryMapper_1 = require("../mappers/categoryMapper");
const helper_1 = require("../utils/helper");
exports.CategoryController = {
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const rawCategoryData = yield categoryRepository_1.CategoryRepository.create({ name });
                (0, helper_1.formatCategory)(res, rawCategoryData, true);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    readCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryRepository_1.CategoryRepository.read();
                const categoryResponses = (0, categoryMapper_1.CategoryMapper)(categories);
                res.status(200).send(categoryResponses);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const rawCategoryData = yield categoryRepository_1.CategoryRepository.delete(categoryId);
                (0, helper_1.formatCategory)(res, rawCategoryData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    readCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const rawCategoryData = yield categoryRepository_1.CategoryRepository.show(categoryId);
                (0, helper_1.formatCategory)(res, rawCategoryData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const rawCategoryData = yield categoryRepository_1.CategoryRepository.update(categoryId, req.body.name);
                (0, helper_1.formatCategory)(res, rawCategoryData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
};
