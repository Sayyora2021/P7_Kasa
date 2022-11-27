import React from "react";

const LodgeInfo = ({ title, location, name, picture }) => {
  return (
    <div className="infoLodge">
      <div className="line">
        <div className="column">
          <h1 className="title">{title}</h1>
          <h3 className="loc">{location}</h3>
        </div>
        <div className="author">
          <h3 className="name">
            {name}
            <img src={picture} alt="le propriétaire" className="host" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LodgeInfo;
