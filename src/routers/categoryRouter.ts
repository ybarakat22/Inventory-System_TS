import { CategoryController } from "../controllers/categoryController";
import { validateInput } from "../middleware/validationMiddleware";
import express = require("express");

const router = express.Router();

router.post("/categories", validateInput, CategoryController.createCategory);

export default router;