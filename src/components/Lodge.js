import React, { useState } from "react";
import locations from "../logements.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import LodgeInfo from "./LodgeInfo";
import Tags from "./Tags.js";
import Stars from "./Stars.js";
import Collaps from "./Collaps";

const Lodge = () => {
  const { id } = useParams();
  const [item] = useState([]);

  console.log("lodge from Component", item);
  console.log(locations);
  //on cherche le id actuel pour récupèrere ses élèments
  const lodgeId = locations.find((item) => item.id === id);

  return (
    <section>
      {lodgeId && (
        <div>
          <Carousel key={lodgeId.id} pictures={lodgeId.pictures} />

          <LodgeInfo
            title={lodgeId.title}
            location={lodgeId.location}
            name={lodgeId.host.name}
            picture={lodgeId.host.picture}
          />
          <div className="line">
            <Tags key={"tags"} tags={lodgeId.tags} />
            <Stars key={"rating"} rating={lodgeId.rating} />
          </div>
          <Collaps title="Description" description={lodgeId.description} />
          <Collaps
            title="Équipements"
            description={lodgeId.equipments.map((useEquip) => (
              <div>{useEquip}</div>
            ))}
          />
        </div>
      )}
    </section>
  );
};

export default Lodge;
