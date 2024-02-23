import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in products router");
});

export default router;
