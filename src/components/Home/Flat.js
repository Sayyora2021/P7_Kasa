import { Link } from "react-router-dom";
import React from "react";

const Flat = ({ flat }) => {
  return (
    <Link key={flat.id} to={`/lodge/${flat.id}`}>
      <figure className="figur">
        <img src={flat.cover} alt="Appartement cosy" />

        <p className="cartTxt">{flat.title}</p>
      </figure>
    </Link>
  );
};

export default Flat;
