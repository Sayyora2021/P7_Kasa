import "../styles/components/flat.scss";
import React from "react";

const Flat = ({ galery }) => {
  return (
    <div className="normImg">
      {/* <h1>{galery.id}</h1> */}
      <img src={galery.cover} alt="Appartement cosy" />
      <h2>{galery.title}</h2>
    </div>
  );
};

export default Flat;
