import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./routes/Layout.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link style={{ color: "white" }} to="/">
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);
