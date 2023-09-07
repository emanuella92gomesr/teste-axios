import { useState, useEffect } from "react";
import axios from "axios";

export const FilterTest = () => {
  const [data, setData] = useState([{ id: "", title: "" }]);
  const [filteredData, setFilteredData] = useState([{ id: "", title: "" }]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      const allData = response.data;
      const result = allData.filter((post: any) => {
        return post.userId === 2;
      });
      setFilteredData(result);
      console.log("result", result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Look the console!</h1>
      <h2>Filtered posts:</h2>
      <ul>
        {filteredData.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <br />
      <h2>All posts:</h2>
      <ul>
        {data.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
