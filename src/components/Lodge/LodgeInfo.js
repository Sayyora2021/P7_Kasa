import React from "react";

const LodgeInfo = ({ title, location }) => {
  return (
    <div className="line">
      <h1 className="title">{title}</h1>
      <h3 className="loc">{location}</h3>
    </div>
  );
};

export default LodgeInfo;
