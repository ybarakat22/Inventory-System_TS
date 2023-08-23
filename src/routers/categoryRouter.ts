// import { CategoryController } from "../controllers/categoryController";
// import {ValidationMiddleware}  from "../middleware/validationMiddleware"
// import express = require("express");

// const router = express.Router();
// const categoryController =  new CategoryController();

// router.post("/categories", ValidationMiddleware.validateInput, categoryController.createCategory);
// router.get("/categories", categoryController.readCategories);
// router.delete("/categories/:id",ValidationMiddleware.validateId, categoryController.deleteCategory);
// router.get("/categories/:id", ValidationMiddleware.validateId , categoryController.readCategory);
// router.patch("/categories/:id",ValidationMiddleware.validateId ,ValidationMiddleware.validateInput , categoryController.updateCategory);

// export default router;