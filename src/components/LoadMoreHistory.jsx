import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LoadMoreHistory() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      const data = response.data;
      const convertToArray = [data];
      setData(convertToArray);
      console.log(convertToArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h2 className="text-4xl text-center mt-6 font-semibold">
        Product Detail Page
      </h2>
      <p className="text-xl text-center mt-6">Product ID: {id}</p>
      <table className="mt-4 min-w-full divide-y divide-gray-600 dark:divide-gray-900">
        <thead>
          <tr className="table-header text-center text-ls">
            <th>Products</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const productName = item.products;
            const productType = Object.keys(productName);
            const finalProductName = Object.keys(productName[productType]);
            console.log(finalProductName);

            return <tr className="text-center text-ml" key={item._id}></tr>;
          })}
        </tbody>
      </table>
    </>
  );
}

{
  /* 
  [
    {
      "products": {
        "drinks": {
          "coca_cola": 10,
          "red_sting": 19
        }
      },
      "_id": "65e02bd76da4b977ee801461",
      "sold_quantity": 29,
      "date": "2024-02-29",
      "__v": 0
    }
  ]
  */
}
