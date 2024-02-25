import express from "express";

import productController from "../controllers/ProductController.js";

const router = express.Router();

router
  .get("/", productController.getProducts)
  .post("/", productController.addProducts)
  .put("/", async (req, res) => {})
  .delete("/", async (req, res) => {});

export default router;