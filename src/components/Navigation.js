import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.scss";
import logo from "../assets/img/logo.png";

const Navigation = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Kasa" className="logo" />
      </div>
      <div>
        <ul className="navigation">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
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
    </div>
  );
};

export default Navigation;
