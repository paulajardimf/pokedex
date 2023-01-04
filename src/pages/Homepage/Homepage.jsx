import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageStyled } from "./HomePageStyled";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Homepage() {
  const { pokedex, setPokedex, pokelist, setPokelist, addToPokedex } =
    useContext(GlobalContext);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon?limit=20&offset=0`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    // const pokedexJson = JSON.parse(localStorage.getItem("pokedex"));
    // if (pokedex) {
    //   setPokedex(pokedexJson);
    // }
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
    console.log(pokelist);
  return (
    <HomePageStyled>
      <Header />
      <section className="container-pokemons">
        <h1 className="title">Todos os Pokémons</h1>
        <section className="container-pokemon">
          {filteredPokemonlist().map((pokemon) => {
            return (
              <PokemonCard
                pokemonUrl={pokemon.url}
                pokemon={pokemon}
                key={pokemon.id}
              />
            );
          })}
        </section>
      </section>
    </HomePageStyled>
  );
}
