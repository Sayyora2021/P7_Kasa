import React from "react";
import locations from "../logements.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Lodge/Carousel";
import LodgeInfo from "../components/Lodge/LodgeInfo";
import Tags from "../components/Lodge/Tags.js";
import Rate from "../components/Lodge/Rate.js";
import Collaps from "../components/About/Collaps";

const Lodge = () => {
  const { id } = useParams();

  //on cherche le id actuel avec find pour récupèrere ses élèments
  const lodgeId = locations.find((item) => item.id === id);

  if (!lodgeId) {
    window.location.href = "/404";
  } else {
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
                <Collaps
                  title="Description"
                  description={lodgeId.description}
                />
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
  }
};

export default Lodge;
