import { Link } from "react-router-dom";
import React from "react";
// import Lodge from "./Lodge";

const Flat = ({ flat }) => {
  return (
    <Link key={flat.id} to={`/lodge/${flat.id}`}>
      <figure>
        <img src={flat.cover} alt="Appartement cosy" classname="normImg" />
        <figcaption>
          <h2>{flat.title}</h2>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Flat;
