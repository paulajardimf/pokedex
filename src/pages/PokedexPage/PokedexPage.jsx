import React from "react";
import Header from "../../components/Header/Header";
import { PokedexPageStyled } from "./PokedexPageStyled";

export default function PokedexPage() {
  return (
    <>
    <Header/>
      <PokedexPageStyled>
      <section>
        <h1>Meus Pokémons</h1>
        </section>
      </PokedexPageStyled>
    </>
  );
}
