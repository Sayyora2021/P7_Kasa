import React, { useState } from "react";
import locations from "../logements.json";
import { useParams } from "react-router-dom";

const Lodge = (pictures) => {
  const { id } = useParams();
  console.log("lodge from Component", id);
  return (
    <div>
      {locations.map((id) => (
        <div>{id.pictures}</div>
      ))}
    </div>
  );
};

export default Lodge;
