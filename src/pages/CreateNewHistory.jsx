import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateNewHistory() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [productType, setProductType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTotalQuantity = handleTotalQuantityChange(); // Update totalQuantity
      setTotalQuantity(updatedTotalQuantity); // Update the totalQuantity state

      const dataForm = {
        totalQuantity: updatedTotalQuantity,
        productName,
        quantity,
        productType,
      };

      const response = await axios.post(
        "http://localhost:8000/products",
        dataForm
      );
      const data = response.data;
      console.log(data);

      console.log(totalQuantity);

      // Reset form fields
      setProductName("");
      setQuantity("");
      setProductType("");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleTotalQuantityChange = () => {
    return totalQuantity <= 0
      ? parseInt(quantity)
      : totalQuantity + parseInt(quantity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center mt-6">CreateNewHistory</h1>
        <div className=" mr-auto ml-auto text-center">
          <input
            className=" w-11/12 border p-2 mt-6 "
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            className=" w-11/12 border p-2 mt-4 "
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <select
            name="Products Type"
            className=" product-types w-11/12 border p-2 mt-4 "
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="null">Choose your products type</option>
            <option value="drinks">Drinks</option>
            <option value="noodles">Noodles</option>
            <option value="bathroom_supplies">Bathroom Supplies</option>
            <option value="ingredients">Ingredients</option>
          </select>
          <input
            className=" w-11/12 border p-2 mt-8 bg-sky-600 text-white rounded-[0.5rem]"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
