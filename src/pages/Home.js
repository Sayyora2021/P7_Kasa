import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Cart />
    </div>
  );
};

export default Home;
