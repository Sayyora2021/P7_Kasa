import "../styles/components/flat.scss";
import React from "react";

const Flat = ({ galery }) => {
  return (
    <div className="table">
      <div className="normImg">
        {/* <h1>{galery.id}</h1> */}
        <img src={galery.cover} alt="Appartement cosy" className="flat" />
        <h2>{galery.title}</h2>
      </div>
    </div>
  );
};

export default Flat;
