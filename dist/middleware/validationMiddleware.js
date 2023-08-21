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
exports.validationMiddleware = void 0;
const categoryRepository_1 = require("../repositories/categoryRepository");
exports.validationMiddleware = {
    validateInput(req, res, next) {
        const name = req.body.name;
        if (!name) {
            return res.status(400).json({ message: "Invalid input" });
        }
        next();
    },
    validateId(req, res, next) {
        const id = req.params.id;
        const validIdRegex = /^[0-9a-fA-F]{24}$/;
        if (!validIdRegex.test(id)) {
            return res.status(400).send({ message: "Invalid Object Id" });
        }
        next();
    },
    validateCategoryReference(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.categoryId;
            if (!id) {
                return res.status(404).send({ message: "Missing categoryId parameter" });
            }
            const category = yield categoryRepository_1.CategoryRepository.show(id);
            if (!category) {
                return res.status(400).send({ message: "Invalid Category Refrence" });
            }
            next();
        });
    },
};
