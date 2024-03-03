import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function History_Table() {
  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      const data = response.data;
      setRows(data);
      console.log(rows);
    } catch {
      console.error("Error fetching data");
    }
  };

  const LoadMore = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <table className="mt-4 min-w-full divide-y divide-gray-600 dark:divide-gray-900">
      <thead>
        <tr className="table-header text-center text-ls">
          <th>Sold Items</th>
          <th>Date</th>
          <th>Profit</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="text-center text-ml" key={row._id}>
            <td key={"sold_quantity"}>{row.sold_quantity}</td>
            <td key={"date"}>{row.date}</td>
            <td key={"profits"}>{row.profits}</td>
            <td key={"id"}>
              <button
                className="load-more-btn font-semibold text-blue-700"
                onClick={() => LoadMore(row._id)}
              >
                Load More {rows._id}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
