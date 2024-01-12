import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// react tutorial 2
// react is a javascript library for building user interfaces
// react is used to build single page applications
// react allows us to create reusable ui components
// react was created by facebook
// react is an open source library (completely free to use)
// react is released under the mit license
// react is used by many companies (facebook, instagram, netflix, paypal, uber, walmart, and many more)
// react has a huge community that continues to grow every day.
// react is currently the most popular javascript library used to build user interfaces

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
