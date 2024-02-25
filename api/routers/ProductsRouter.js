import express from "express";

import HistoryModel from "../models/History_db.js";

const router = express.Router();

router
  .get("/", async (req, res) => {
    try {
      const products_histories = await HistoryModel.find();
      if (products_histories === "") {
        res.status(404).json({ message: "No history found" });
      } else {
        res.json(products_histories);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
      res.status(500).json({ message: "Error fetching history" });
    }
  })
  .post("/", async (req, res) => {
    try {
      const { sold_quantity, profits, products } = req.body;
      const createNewHistory = await HistoryModel.create({
        sold_quantity,
        profits,
        products,
      });
      res.send(201).json(createNewHistory);
    } catch (error) {
      console.error("Error creating history:", error);
    }
  });

export default router;
