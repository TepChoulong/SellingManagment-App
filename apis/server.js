import express from "express";
import dotenv from "dotenv";
import Mongoose from "mongoose";

import HistoryModel from "./models/History_db.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

const url = process.env.MONGOOSE_DB_URL;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/history", async (req, res) => {
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
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Listening on port ${port}`);
  }
});

async function connectDB() {
  try {
    await Mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
