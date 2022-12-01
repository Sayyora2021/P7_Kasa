import React, { useState } from "react";
import arrow from "../../assets/img/arrow.svg";

const Collaps = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flexBetween">
      <div className="box">
        <h2 key={title}>{title}</h2>

        <img
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "dropdown open" : "dropdown "}
          src={arrow}
          alt="fleche"
        />
      </div>
      {isOpen && <div className="info">{description}</div>}
    </div>
  );
};

export default Collaps;
