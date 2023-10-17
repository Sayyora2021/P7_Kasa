import React from "react";
import locations from "../logements.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Lodge/Carousel";
import LodgeInfo from "../components/Lodge/LodgeInfo";
import Tags from "../components/Lodge/Tags.jsx";
import Rate from "../components/Lodge/Rate.jsx";
import Collaps from "../components/About/Collaps";
import Host from "../components/Lodge/Host";

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
          <div className="lodgeContainer">
            <Carousel key={lodgeId.id} pictures={lodgeId.pictures} />

            <LodgeInfo title={lodgeId.title} location={lodgeId.location} />
            <div className="lineTag">
              <Tags tags={lodgeId.tags} />
            </div>

            <div className="hostRate">
              <Host name={lodgeId.host.name} picture={lodgeId.host.picture} />
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
                  description={lodgeId.equipments.map((useEquip, i) => (
                    <div key={i}>{useEquip}</div>
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
