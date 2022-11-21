import React from "react";
import locations from "../logements.json";
import { useLocation } from "react-router-dom";

import { useState } from "react";

const Lodge = () => {
  const [appart] = useState();
  console.log(locations);
  return (
    <section className="">
      {locations.map((flat) => (
        <div className="img-size">
          {flat.title}
          {/* <img src={flat.pictures} alt="photo de l'appartement" /> */}
        </div>
      ))}
    </section>
  );
};

export default Lodge;
