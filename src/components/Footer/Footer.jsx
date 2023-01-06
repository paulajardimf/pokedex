import React from "react";
import { FooterStyled } from "./FooterStyled";
import linkedin from "../../assets/icon-linkedin.svg";
import github from "../../assets/icon-github.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <p>Desenvolvido por Paula Jardim - 2022</p>
      <div>
        <a href="https://github.com/paulajardimf" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulajardimf/" target="_blank" rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </FooterStyled>
  );
}
