import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    name: "",
    age: "",
    fav_color: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Crewmates")
      .update({
        name: post.name,
        age: post.age,
        fav_color: post.fav_color,
      })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Crewmates").delete().eq("id", id);

    window.location = "http://localhost:3000/";
  };

  return (
    <div>
      <form>
        <label for="name">name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={post.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="age">age</label>
        <br />
        <input
          type="text"
          id="age"
          name="age"
          value={post.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="fav_color">fav_color</label>
        <br />
        <input
          type="text"
          id="fav_color"
          name="fav_color"
          value={post.fav_color}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
