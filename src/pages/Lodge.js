import React, { useState } from "react";
import locations from "../logements.json";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import LodgeInfo from "../components/LodgeInfo";
import Tags from "../components/Tags.js";
import Rate from "../components/Rate.js";
import Collaps from "../components/Collaps";

const Lodge = () => {
  const { id } = useParams();
  const [item] = useState([]);

  console.log("lodge from Component", item);
  console.log(locations);

  //on cherche le id actuel avec find pour récupèrere ses élèments
  const lodgeId = locations.find((item) => item.id === id);

  if (!lodgeId) {
    return <Navigate to="/notfound" />;
  }

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
          <div className="lineTag">
            <Tags tags={lodgeId.tags} />

            <Rate rating={lodgeId.rating} />
          </div>
          <div className="divise">
            <div className="one ">
              <Collaps title="Description" description={lodgeId.description} />
            </div>
            <div className="one">
              <Collaps
                title="Équipements"
                description={lodgeId.equipments.map((useEquip) => (
                  <div>{useEquip}</div>
                ))}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Lodge;
