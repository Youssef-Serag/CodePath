import { useState } from "react";
import { Link, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";
import Read from "./Pages/Read";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Read data={posts} />,
    },
    {
      path: "/edit/:id",
      element: <Edit data={posts} />,
    },
    {
      path: "/new",
      element: <Create />,
    },
    {
      path: "/view:id",
      element: <View data={posts} />,
    },
  ]);
  return (
    <div className="App">
      <div className="header">
        <h1>Crewmate Maker</h1>
        <Link to="/">
          <button className="headerBtn"> Gallery of Crewmates 🔍 </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create a new Crewmate </button>
        </Link>
      </div>
      {element}
    </div>
  );
}

export default App;
