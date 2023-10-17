import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <h1 className="number">404</h1>
      <div className="errTxt">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </div>
      <Link className="link" to="/">
        Retournez sur la page d'accueil
      </Link>
    </section>
  );
};

export default NotFound;
