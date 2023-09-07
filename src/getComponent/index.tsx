import { useState, useEffect } from "react";
import axios from "axios";

export const GetData = () => {
  const [data, setData] = useState([{ id: "", title: "" }]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
