import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Lodge from "../pages/Lodge";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/lodge/:id" element={<Lodge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
