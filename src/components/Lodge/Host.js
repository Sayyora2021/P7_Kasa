import React from "react";

const Host = ({ name, picture }) => {
  return (
    <div>
      <div className="author">
        <h3 className="name">
          {name}
          <img src={picture} alt="le propriétaire" className="host" />
        </h3>
      </div>
    </div>
  );
};

export default Host;
