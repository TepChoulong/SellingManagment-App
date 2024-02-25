import express, { json } from "express";
import dotenv from "dotenv";
import Mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import ProductRouter from "./routers/ProductsRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const url = process.env.MONGOOSE_DB_URL;

connectDB();

app.use("/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
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
    await Mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
