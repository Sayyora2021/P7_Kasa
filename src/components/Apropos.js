import React from "react";
import "../styles/components/apropos.scss";
import apropos from "../assets/img/about.png";
import arrow from "../assets/img/arrow.png";

const Apropos = () => {
  return (
    <section className="aboutB">
      <img src={apropos} alt="montagne" />

      <ul className="flexBetwen">
        <li className="dropdown dropTxt">
          Fiabilité
          <img src={arrow} alt="" className="arrow" />
        </li>
        <li className="dropdown dropTxt">Respect</li>
        <li className="dropdown dropTxt">Service</li>
        <li className="dropdown dropTxt">Responsabilité</li>
      </ul>
    </section>
  );
};

export default Apropos;
