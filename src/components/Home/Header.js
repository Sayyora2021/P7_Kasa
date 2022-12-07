import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navigation = () => {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" />

      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="nav">Accueil </li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="nav">A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
