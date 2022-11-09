import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
