import React from "react";
import apropos from "../assets/img/about.png";
import arrow from "../assets/img/arrow.svg";

const Apropos = () => {
  return (
    <section className="about">
      <div className="aboutB">
        <img src={apropos} alt="montagne" className="mont" />

        <ul className="flexBetwen">
          <li className="box">
            <h2>Fiabilité</h2>
            <span className="dropdown">
              <img src={arrow} alt="flèche" className="fleche" />
            </span>
          </li>
          <div className="info">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <li className="box">
            <h2>Respect</h2>
          </li>
          <li className="box">
            <h2>Service</h2>
          </li>
          <li className="box">
            <h2>Responsabilité</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Apropos;
