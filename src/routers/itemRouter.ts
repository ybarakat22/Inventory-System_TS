import { ItemController } from "../controllers/itemController";
import {validationMiddleware}  from "../middleware/validationMiddleware"
import express = require("express");

const router = express.Router();

router.post("/items", validationMiddleware.validateInput, validationMiddleware.validateCategoryReference, ItemController.createItem);
router.get("/items", ItemController.readItems);
router.delete("/items/:id",validationMiddleware.validateId, ItemController.deleteItem);
router.get("/items/:id", validationMiddleware.validateId , ItemController.readItem);
router.patch("/items/:id",validationMiddleware.validateId ,validationMiddleware.validateInput ,ItemController.updateItem);

export default router;