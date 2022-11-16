import React from "react";
import footer from "../assets/img/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="normFooter">
        <img src={footer} alt="Logo Kasa" className="footlogo" />
        <h3>© 2020 Kasa. All rights reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
