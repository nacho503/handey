import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" excact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
