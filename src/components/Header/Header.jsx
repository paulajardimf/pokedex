import React, { useState } from "react";
import { HeaderStyled } from "./HeaderStyled";
import pokemon from "../../assets/pokemon.svg";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [page, setPage] = useState("HomePage");
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <img src={pokemon} alt="" />
      {page === "HomePage" && (
        <button onClick={() => {
          setPage("PokedexPage");
          goToPokedexPage(navigate);
        }}>
          Pokédex
        </button>
      )}
      {page === "PokedexPage" && (
        <button onClick={() => {
          setPage("HomePage");
          goToHomePage(navigate);
        }}>
          Todos os Pokémons
        </button>
      )}
    </HeaderStyled>
  );
}
