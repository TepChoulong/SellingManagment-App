import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function History_Post() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const navigate = useNavigate();

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

  const LoadMore = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <tr className="text-center bg-slate-200">
      {data.map((element) => {
        return (
          <>
            <td key={"sold_quantity"}>{element.sold_quantity}</td>
            <td key={"date"}>{element.date}</td>
            <td key={"profits"}>{element.profits}</td>
            <td>
              <button
                className="load-more-btn font-semibold text-blue-700"
                onClick={() => LoadMore(element._id)}
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
