import "../styles/components/flat.scss";
import { Link } from "react-router-dom";
import React from "react";

const Flat = ({ galery }) => {
  return (
    <div className="normImg">
      <img src={galery.cover} alt="Appartement cosy" />
      <h2>{galery.title}</h2>

      <Link to="./Lodge.js"></Link>
    </div>
  );
};

export default Flat;
