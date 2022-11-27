import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="boxes">
      {tags.map((tag) => (
        <div className="minBox">{tag}</div>
      ))}
    </div>
  );
};

export default Tags;
