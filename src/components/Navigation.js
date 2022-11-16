import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navigation = () => {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" />

      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="home">Accueil </li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="home">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
