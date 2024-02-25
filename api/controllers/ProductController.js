import HistoryModel from "../models/History_db.js";

const getProducts = async (req, res) => {
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
};

const addProducts = async (req, res) => {
  const { productName, productType, quantity } = req.body;
  try {
    // replace space with _ and make it lower case
    let trimProductName = productName.replace(/\s+/g, "_").toLowerCase();

    const newHistory = HistoryModel.create({
      sold_quantity: 0,
      products: {
        [productType]: {
          [trimProductName]: quantity,
        },
      },
    });

    console.log(productName, productType, quantity);

    res.json(newHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getProducts, addProducts };
