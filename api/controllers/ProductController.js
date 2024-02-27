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
  const { productName, quantity, productType, totalQuantity } = req.body;
  const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format

  try {
    // replace space with _ and make it lower case
    let trimProductName = productName.replace(/\s+/g, "_").toLowerCase();

    // checking if there is an existing history
    let existingHistory = await HistoryModel.findOne({
      date: currentDate,
    });

    if (!existingHistory) {
      const historyDataForm = {
        date: currentDate,
        sold_quantity: totalQuantity,
        products: {
          [productType]: {
            [trimProductName]: quantity,
          },
        },
      };

      // Create a new history
      const createNewHistory = await HistoryModel.create(historyDataForm);
      res.status(201).json(createNewHistory);
    } else {
      const updatedProducts = { ...existingHistory.products };

      if (!updatedProducts[productType]) {
        // If the product type doesn't exist in existing history, create a new entry
        updatedProducts[productType] = { [trimProductName]: quantity };
      } else {
        if (updatedProducts[productType][trimProductName]) {
          // If the product already exists, update the quantity
          updatedProducts[productType][trimProductName] += quantity;
        } else {
          // If the product doesn't exist, add it with the provided quantity
          updatedProducts[productType][trimProductName] = quantity;
        }
      }

      // Calculate new sold quantity
      const newSoldQuantity = totalQuantity;

      existingHistory = await HistoryModel.findOneAndUpdate(
        { date: currentDate },
        { products: updatedProducts, sold_quantity: newSoldQuantity },
        { new: true }
      );
      res.status(201).json(existingHistory);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedHistory = await HistoryModel.findByIdAndDelete(req.params.id);
    if (!deletedHistory) {
      return res.status(404).send("History not found");
    }
    return res.send("History deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export default { getProducts, addProducts, deleteProduct };
