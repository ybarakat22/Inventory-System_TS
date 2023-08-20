"use strict";
exports.__esModule = true;
var categoryController_1 = require("../controllers/categoryController");
var validationMiddleware_1 = require("../middleware/validationMiddleware");
var express = require("express");
var router = express.Router();
router.post("/categories", validationMiddleware_1.validateInput, categoryController_1.CategoryController.createCategory);
exports["default"] = router;
