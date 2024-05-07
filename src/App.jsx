import React from "react";
import { Nav } from "./Components/Nav.jsx";
import { Route, Routes } from "react-router-dom";
import { Website, Home, News, Docs, About } from "./Components/Pages";
import "./App.css";

export default function MyApp() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Website" element={<Website />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
