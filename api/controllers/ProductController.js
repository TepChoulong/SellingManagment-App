import HistoryModel from "../models/History_db.js";

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-indexed month
const year = currentDate.getFullYear();
const currentDateFormatted = `${year}-${month}-${day}`;

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

    let existingHistory = await HistoryModel.findOne({
      date: currentDateFormatted,
    });

    const newHistoryForm = {
      sold_quantity: 0,
      date: currentDateFormatted,
      products: {
        [productType]: {
          [trimProductName]: quantity,
        },
      },
    };

    if (!existingHistory) {
      // Create a new history
      const createNewHistory = await HistoryModel.create(newHistoryForm);
      res.status(201).json(createNewHistory);
    } else {
      // Add new history to existing history
      const addNewHistoryToExistingHistory = await HistoryModel.insertMany({
        [productType]: {
          [trimProductName]: quantity,
        },
      });
      res.status(201).json(addNewHistoryToExistingHistory);
    }
    await existingHistory.save();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getProducts, addProducts };
