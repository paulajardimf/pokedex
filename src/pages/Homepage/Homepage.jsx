import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageStyled } from "./HomePageStyled";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export default function Homepage() {
  const [pokelist, setPokelist] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon?limit=151&offset=0`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <HomePageStyled>
      <Header />
      <section>
        <h1>Todos os Pokémons</h1>
        <section className="container-pokemons">
          {pokelist.map((pokemon) => {
            return (
              <PokemonCard pokemonUrl={pokemon.url} pokemon={pokemon} key={pokemon.name} />
            );
          })}
        </section>
      </section>
    </HomePageStyled>
  );
}
