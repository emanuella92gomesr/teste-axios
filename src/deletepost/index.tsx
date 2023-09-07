import { useState, useEffect } from "react";
import axios from "axios";

export const DeletePost = () => {
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

  const removePost = async (id: any) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log("Post deleted: ", id);
    } catch (error) {
      console.error("Error deleting post:", error);
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
          <li key={post.id}>
            {post.title}
            {""}
            <button onClick={() => removePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
