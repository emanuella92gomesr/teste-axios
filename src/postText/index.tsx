import { useState, useEffect } from "react";
import axios from "axios";

export const Post = () => {
  const [data, setData] = useState([{ id: "", title: "", body: "" }]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      const allData = response.data;
      const result = allData.filter((post: any) => {
        return post.userId === 3;
      });
      setData(allData);
      console.log("result", result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Some posts</h1>
      {data.map((post) => (
        <>
          <h2>{post.title}</h2>
          <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
            {post.body}
          </p>
          <br />
        </>
      ))}
    </>
  );
};
