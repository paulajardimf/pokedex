import React from "react";
import Header from "../../components/Header/Header";
import pikachu from "../../assets/pikachu.png";
import { NotFoundPageStyled } from "./NotFoundPageStyled";

function NotFoundPage() {
  return (
    <>
      <Header />
      <NotFoundPageStyled>
          <h1>Página não encontrada!</h1>
          <img src={pikachu} alt="pikachu" />
      </NotFoundPageStyled>
    </>
  );
}

export default NotFoundPage;
