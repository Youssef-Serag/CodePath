import { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({ name: "", age: "", fav_color: "" });

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
      const { data, error } = await supabase.from("Crewmates").insert([
        {
          name: post.name,
          age: post.age,
          fav_color: post.fav_color,
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
        <label for="name">name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />
        <label for="age">age</label>
        <br />
        <input type="text" id="age" name="age" onChange={handleChange} />
        <br />
        <br />
        <label for="Favorite Color">Favotite Color</label>
        <br />
        <input
          type="text"
          id="fav_color"
          name="fav_color"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
