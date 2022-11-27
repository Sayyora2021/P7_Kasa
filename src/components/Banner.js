import React from "react";

const guest = window.location;
console.log(guest);
const Banner = () => {
  let isHomeBanner = guest.pathname === "/";
  return (
    <section className={isHomeBanner ? "banner  media-banner" : "banner"}>
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
