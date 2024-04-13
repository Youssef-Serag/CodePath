import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Layout from "./routes/Layout.jsx";
import EditPost from "./routes/EditPost.jsx";
import CreatePost from "./routes/CreatePost.jsx";
import DetailPage from "./Components/DetailPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="/new" element={<CreatePost />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
