import React, { Link } from "react";

const NotFound = () => {
  return (
    <div className="404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="./">Retournez sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
