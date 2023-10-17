import React from "react";

const Host = ({ name, picture }) => {
  return (
    <div>
      <h3 className="name">
        {name}
        <img src={picture} alt="le propriétaire" className="host" />
      </h3>
    </div>
  );
};

export default Host;
