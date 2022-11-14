import React from "react";
import "../styles/components/lodge.scss";
// import Flat from "./Flat";

const Lodge = (galery) => {
  const { galery } = this.props;
  return (
    <section className="">
      <div>
        <Flat props={galery.pictures} />
      </div>
    </section>
  );
};

export default Lodge;
