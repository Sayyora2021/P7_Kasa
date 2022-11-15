import "../styles/components/flat.scss";
import { Link } from "react-router-dom";
import React from "react";
// import Lodge from "./Lodge";

const Flat = ({ flat }) => {
  return (
    <Link to={"/lodge"} state={{ data: flat }}>
      <div className="normImg">
        <img src={flat.cover} alt="Appartement cosy" />
        <h2>{flat.title}</h2>
      </div>
    </Link>
  );
};

export default Flat;
