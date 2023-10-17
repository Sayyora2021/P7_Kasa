import React from "react";

const guest = window.location;

const Banner = () => {
  //isHomeBanner est égale à la page d'accueil
  let isHomeBanner = guest.pathname === "/";
  return (
    <section className={isHomeBanner ? "banner " : "banner"}>
      <div
        className={
          isHomeBanner ? "banner-img home-banner" : "banner-img about-banner"
        }
      ></div>
      {isHomeBanner && (
        <h1 className="txtBanner">Chez vous, partout et ailleurs</h1>
      )}
    </section>
  );
};

export default Banner;
