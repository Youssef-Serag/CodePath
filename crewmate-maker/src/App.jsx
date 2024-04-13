import { useState, useEffect } from "react";
import "./App.css";
import { supabase } from "./client";
import Card from "./Components/Card";
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Crewmates").select();

      setPosts(data);
    };
    fetchPosts();
  }, [posts]);

  return (
    <>
      <Link to="/new">
        <button className="create-button">Create a new Crewmate</button>
      </Link>
      <div className="ReadPosts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              id={post.id}
              name={post.name}
              age={post.age}
              fav_color={post.fav_color}
            />
          ))
        ) : (
          <h2>{"No Challenges Yet 😞"}</h2>
        )}
      </div>
    </>
  );
}

export default App;
