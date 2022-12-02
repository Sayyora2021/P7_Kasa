import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error">
      <h1>404</h1>
      <span className="errTxt">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="link" to="/">
        Retournez sur la page d'accueil
      </Link>
    </main>
  );
};

export default NotFound;
