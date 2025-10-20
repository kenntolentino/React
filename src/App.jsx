// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import LandingPage from "./pages/user/LandingPage";
import ListingPage from "./pages/user/listing";
import OrderPage from "./pages/user/order";

// Global CSS
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
