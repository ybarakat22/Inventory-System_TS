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
exports.ItemController = void 0;
const itemRepository_1 = require("../repositories/itemRepository");
const itemMapper_1 = require("../mappers/itemMapper");
const helper_1 = require("../utils/helper");
exports.ItemController = {
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, categoryId } = req.body;
                const rawItemData = yield itemRepository_1.ItemRepository.create({ name, categoryId });
                (0, helper_1.formatItem)(res, rawItemData, true);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    readItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield itemRepository_1.ItemRepository.read();
                const itemResponses = (0, itemMapper_1.ItemMapper)(items);
                res.status(200).send(itemResponses);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const rawItemData = yield itemRepository_1.ItemRepository.delete(categoryId);
                (0, helper_1.formatItem)(res, rawItemData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    readItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemId = req.params.id;
                const rawItemData = yield itemRepository_1.ItemRepository.show(itemId);
                (0, helper_1.formatItem)(res, rawItemData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
    updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemId = req.params.id;
                const rawItemData = yield itemRepository_1.ItemRepository.update(itemId, req.body.name);
                (0, helper_1.formatItem)(res, rawItemData, false);
            }
            catch (error) {
                res.status(500).send({ message: "Server Error" });
            }
        });
    },
};
