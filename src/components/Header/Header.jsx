import React, { useContext } from "react";
import { HeaderStyled } from "./HeaderStyled";
import pokemon from "../../assets/pokemon.svg";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Header({ pokemonObject }) {
  const { page, setPage, addToPokedex, removeFromPokedex, pokedex } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const filterPokedex = pokedex.filter((pokemon) => {
    return pokemon.name === pokemonObject?.name;
  });

  return (
    <HeaderStyled>
      <a
        onClick={() => {
          setPage("HomePage");
          goToHomePage(navigate);
        }}
      >
        <img src={pokemon} alt="" />
      </a>
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
          {"< Todos Pokémons"}
        </button>
      )}
      {page === "DetailPage" && (
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

          {filterPokedex.length > 0 && (
            <button
              className="button-delete"
              onClick={() => {
                removeFromPokedex(pokemonObject);
              }}
            >
              Excluir da Pokédex
            </button>
          )}
          {filterPokedex.length === 0 && (
            <button
              className="button-add"
              onClick={() => {
                addToPokedex(pokemonObject);
              }}
            >
              Adicionar à Pokédex
            </button>
          )}
        </>
      )}
    </HeaderStyled>
  );
}
