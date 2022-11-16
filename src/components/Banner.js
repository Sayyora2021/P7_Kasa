import React from "react";
import background from "../assets/img/background.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={background} alt="banner page" className="banner-img" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
