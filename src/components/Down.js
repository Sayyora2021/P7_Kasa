import React, { useState } from "react";
import arrow from "../assets/img/arrow.svg";

const Down = ({ title, description, equipment }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flexBetwen">
      <div className="box">
        <h2 key={title}>{title}</h2>

        <img
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "dropdown open" : "dropdown "}
          src={arrow}
          alt="fleche"
        />
      </div>
      {isOpen && (
        <div className="info">
          {description} {equipment}
        </div>
      )}
    </div>
  );
};

export default Down;
