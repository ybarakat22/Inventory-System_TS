import { CategoryController } from "../controllers/categoryController";
import {validationMiddleware}  from "../middleware/validationMiddleware"
import express = require("express");

const router = express.Router();

router.post("/categories", validationMiddleware.validateInput, CategoryController.createCategory);
router.get("/categories", CategoryController.readCategories);
router.delete("/categories/:id", CategoryController.deleteCategory);
router.get("/categories/:id", CategoryController.readCategory);
router.patch("/categories/:id",validationMiddleware.validateInput , CategoryController.updateCategory);

export default router;