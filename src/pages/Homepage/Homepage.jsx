import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageStyled } from "./HomePageStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from "../../components/Modal/Modal";

export default function Homepage() {
  const { pokedex, setPokedex, pokelist, setPokelist, addToPokedex, fetchPokemons, isModalOpen } = useContext(GlobalContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (pokedex.length > 0) {
      fetchPokemons();
    }
  }, [pokedex]);

  const filteredPokemonlist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
  return (
    <HomePageStyled isModalOpen={isModalOpen}>
      <Header />
       {isModalOpen && <Modal />}
      <section className="container-pokemons">
        <h1 className="title">Todos os Pokémons</h1>
        <section className="container-pokemon">
          {filteredPokemonlist().map((pokemon) => {
            return (
              <PokemonCard
                pokemonUrl={pokemon.url}
                pokemon={pokemon}
                key={pokemon.url}
              />
            );
          })}
        </section>
      </section>
    </HomePageStyled>
  );
}
