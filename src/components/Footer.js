import React from "react";
import "../styles/components/footer.scss";
import footer from "../assets/img/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footer} alt="Logo Kasa" className="footlogo" />
      <h3 className="footerTxt">2020 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
