import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PokedexPageStyled } from "./PokedexPageStyled";

export default function PokedexPage() {
  const {pokedex} = useContext(GlobalContext)
  return (
    <>
    <Header/>
      <PokedexPageStyled>
      <section>
        <h1>Meus Pokémons</h1>
        <section className="container-pokemon">
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard pokemonUrl={pokemon.url} pokemon={pokemon} key={pokemon.id} />
            );
          })}
        </section>
        </section>

      </PokedexPageStyled>
    </>
  );
}
