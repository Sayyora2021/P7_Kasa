import React from "react";
import "../styles/components/apropos.scss";
import apropos from "../assets/img/about.png";
import arrow from "../assets/img/arrow.svg";

const Apropos = () => {
  return (
    <section className="aboutB">
      <img src={apropos} alt="montagne" className="mont" />

      <ul className="flexBetwen">
        <li className="dropdown dropTxt">
          Fiabilité
          <img src={arrow} alt="fléche" className="fleche" />
        </li>
        <p className="info">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
        <li className="dropdown dropTxt">Respect</li>
        <li className="dropdown dropTxt">Service</li>
        <li className="dropdown dropTxt">Responsabilité</li>
      </ul>
    </section>
  );
};

export default Apropos;
