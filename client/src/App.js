import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./Screens/BlogDetails";
import BlogPost from "./Screens/BlogPost";
import Homescreen from "./Screens/Homescreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/blog/post" element={<BlogPost />} />
    </Routes>
  );
}
