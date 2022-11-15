import "../styles/components/flat.scss";
import { Link } from "react-router-dom";
import React from "react";
// import Lodge from "./Lodge";

const Flat = ({ flat }) => {
  return (
    <div className="normImg">
      <img src={flat.cover} alt="Appartement cosy" />

      <Link to={"/lodge"} state={{ data: flat }}>
        <h2>{flat.title}</h2>
      </Link>
    </div>
  );
};

export default Flat;
