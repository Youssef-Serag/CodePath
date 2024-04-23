import { Outlet, Link } from "react-router-dom";
import { React, useState } from "react";
import "./Layout.css";

const Layout = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <div className="navbar-brand">
              <p>History Hub</p>
            </div>
            <div className="search-bar">
              <input
                type="text"
                name="search"
                value={search}
                placeholder="Search"
                onChange={handleChange}
              />
            </div>
            <div className="nav-buttons">
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/new">
                <button>Create a new Post</button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
