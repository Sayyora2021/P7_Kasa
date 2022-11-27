import React from "react";
// import Collaps from "./Collaps";

const Description = ({ description }) => {
  return (
    <div>
      {description.map((notice) => (
        <div className="">{notice}</div>
      ))}
    </div>
  );
};

export default Description;
