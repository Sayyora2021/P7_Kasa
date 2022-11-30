import { Link } from "react-router-dom";
import React from "react";

const Flat = ({ flat }) => {
  return (
    <Link key={flat.id} to={`/lodge/${flat.id}`}>
      <figure className="figur">
        <img src={flat.cover} alt="Appartement cosy" />
        <figcaption className="flTitle">
          <h2>{flat.title}</h2>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Flat;
