"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const categoryController_1 = require("./controllers/categoryController");
const categoryRepository_1 = require("./repositories/categoryRepository");
const itemController_1 = require("./controllers/itemController");
const itemRepository_1 = require("./repositories/itemRepository");
const container = new inversify_1.Container();
exports.container = container;
container.bind(categoryController_1.CategoryController).to(categoryController_1.CategoryController);
container.bind('CategoryRepository').to(categoryRepository_1.CategoryRepository);
container.bind(itemController_1.ItemController).to(itemController_1.ItemController);
container.bind('ItemRepository').to(itemRepository_1.ItemRepository);
