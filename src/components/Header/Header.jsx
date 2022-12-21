import React, { useContext, useState } from "react";
import { HeaderStyled } from "./HeaderStyled";
import pokemon from "../../assets/pokemon.svg";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Header() {
  const { page, setPage } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <img src={pokemon} alt="" />
      {page === "HomePage" && (
        <button
          className="button-pokedex"
          onClick={() => {
            setPage("PokedexPage");
            goToPokedexPage(navigate);
          }}
        >
          Pokédex
        </button>
      )}
      {page === "PokedexPage" && (
        <button
          className="button-homepage"
          onClick={() => {
            setPage("HomePage");
            goToHomePage(navigate);
          }}
        >
          {"< Todos os Pokémons"}
        </button>
      )}
      {page === "PokemonPage" && (
        <>
          <button
            className="button-homepage"
            onClick={() => {
              setPage("HomePage");
              goToHomePage(navigate);
            }}
          >
            {"< Todos os Pokémons"}
          </button>
          <button
            className="button-pokedex"
            onClick={() => {
              setPage("PokedexPage");
              goToPokedexPage(navigate);
            }}
          >
            Pokédex
          </button>
        </>
      )}
    </HeaderStyled>
  );
}
