import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function History_Post() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      const data = response.data;
      setData(data);
    } catch {
      console.error("Error fetching data");
    }
  };

  const LoadMore = () => {
    return <Navigate to={`/products/${id}`} />;
  };
  return (
    <tr className="text-center bg-slate-200">
      {data.map((element) => {
        return (
          <>
            <td>{element.sold_quantity}</td>
            <td>{element.date}</td>
            <td>{element.profits}</td>
            <td>
              <button
                className="load-more-btn font-semibold text-blue-700"
                onClick={LoadMore}
              >
                Load More
              </button>
            </td>
          </>
        );
      })}
    </tr>
  );
}
