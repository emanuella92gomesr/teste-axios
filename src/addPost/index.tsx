import { useState } from "react";
import axios from "axios";

export const AddPost = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Post created: ", response.data);
    } catch (error) {
      console.error("Error creating post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <button type="submit">Add post</button>
    </form>
  );
};
