import React, { useState } from "react";
import arrow from "../../assets/img/arrow.svg";

const Collaps = ({ title, description }) => {
  //isOpen est false-fermé, il s'ouvre onClick (props:title & description)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flexBetween">
      <div className="box">
        <h2 key={title}>{title}</h2>

        <img
          //btn s'ouvre si isOpen ouvre, sinon fermé, qd il est ouvert il affiche descrition
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "dropdown open" : "dropdown "}
          src={arrow}
          alt="fleche"
        />
      </div>
      {isOpen && (
        <div key="key" className="info">
          {description}
        </div>
      )}
    </div>
  );
};

export default Collaps;
