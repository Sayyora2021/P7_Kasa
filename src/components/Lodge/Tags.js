import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="boxes">
      {tags.map((tag, i) => (
        <div className="minBox" key={i}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
