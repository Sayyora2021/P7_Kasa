import React from "react";
// import locations from "../logements.json";
// import { useParams } from "react-router-dom";

import { useState } from "react";

const Lodge = () => {
  // const { id } = useParams();
  const [lodge] = useState([]);
  // const [loading, setLoading] = useState(false);
  // console.log("lodge from Component", id);
  return (
    <section className="">
      {lodge.map((flat) => (
        <div className="img-size">
          {flat.title}
          {/* <img src={flat.pictures} alt="photo de l'appartement" /> */}
        </div>
      ))}
    </section>
  );
};

export default Lodge;
