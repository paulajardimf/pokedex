import { useState } from "react";

export default function GlobalState() {
  const [pokelist, setPokelist] = useState([]);
  const [page, setPage] = useState("HomePage");
  const [pokedex, setPokedex] = useState([]);

  const filterPokemon = (pokemonName) => {
    const pokeFilter = pokelist.filter((pokemon) => pokemon.name !== pokemonName)
    setPokelist(pokeFilter)
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      const pokedexJson = JSON.stringify(newPokedex)
      localStorage.setItem("pokedex", pokedexJson)
      setPokedex(newPokedex);
    }
    filterPokemon(pokemonToAdd.name)
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };

  return {
    page,
    setPage,
    addToPokedex,
    pokedex,
    setPokedex,
    removeFromPokedex,
    pokelist,
    setPokelist
  };
}
