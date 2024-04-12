import { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", author: "", description: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault(); // This should ensure the form does not submit traditionally

    try {
      const { data, error } = await supabase.from("Posts").insert([
        {
          title: post.title,
          author: post.author,
          description: post.description,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted:", data); // Output inserted data
        window.location = "/"; // Redirect only after successful insert
      }
    } catch (err) {
      console.error("Exception when inserting data:", err);
    }
  };

  return (
    <div>
      <form>
        <label for="title">Title</label> <br />
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input type="text" id="author" name="author" onChange={handleChange} />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
