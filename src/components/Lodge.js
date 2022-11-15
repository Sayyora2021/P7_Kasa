import React from "react";
import "../styles/components/lodge.scss";
import { useLocation } from "react-router-dom";

const Lodge = () => {
  const location = useLocation();
  const lodgeData = location.state.data;
  return (
    <section className="">
      <div>{lodgeData.id} </div>
      <div>{lodgeData.pictures}</div>
    </section>
  );
};

export default Lodge;
