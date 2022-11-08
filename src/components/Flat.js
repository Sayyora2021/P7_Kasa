import "../styles/components/flat.scss";
import React from "react";

const Flat = ({ galery }) => {
  return (
    <section className="table">
      <div className="normImg">
        <img src={galery.cover} alt="Appartement cosy" className="flat" />
        <h2 className="flatTxt">{galery.title}</h2>
      </div>
    </section>
  );
};

export default Flat;
