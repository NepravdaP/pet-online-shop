import React, { FC } from "react";
import "./style.css";
import valve from "../../assets/footer-logos/valve.png";
import blizz from "../../assets/footer-logos/blizzard.png";
import bethesda from "../../assets/footer-logos/bethesda.png";

const Footer: FC = () => {
  return (
    <footer>
      <a href="https://www.valvesoftware.com/" className="footer-link">
        <img src={valve} className="vavle-logo"></img>
      </a>
      <a
        href=" https://www.blizzard.com/"
        target="_blank"
        className="footer-link"
      >
        <img src={blizz} alt="" className="blizz-logo" />
      </a>
      <a href="https://bethesda.net/ru/dashboard" className="footer-link">
        <img src={bethesda} alt="" className="fromm-logo" />
      </a>
    </footer>
  );
};
export default Footer;
