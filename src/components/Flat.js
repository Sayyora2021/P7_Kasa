import "../styles/components/flat.scss";
import { Link } from "react-router-dom";
import React from "react";

const Flat = ({ galery }) => {
  return (
    <div className="normImg">
      {/* <h1>{galery.id}</h1> */}
      <img src={galery.cover} alt="Appartement cosy" />
      <h2>{galery.title}</h2>
      <Link
        to="/Lodge.js"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <div className="info">{/* <div>{galery.pictures}</div> */}</div>
      </Link>
    </div>
  );
};

export default Flat;
