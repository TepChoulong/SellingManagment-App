import express from "express";

import productController from "../controllers/ProductController.js";

const router = express.Router();

router
  .get("/", productController.getProducts)
  .get("/:id", productController.getProductById)
  .post("/", productController.addProducts)
  .put("/", async (req, res) => {})
  .delete("/:id", productController.deleteProduct);

export default router;
