import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/url";

export default function GlobalState() {
  const [pokelist, setPokelist] = useState([]);
  const [page, setPage] = useState("HomePage");
  const [pokedex, setPokedex] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddPokemon, setIsAddPokemon] = useState(true);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon?limit=151&offset=0`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const filterPokemon = (pokemonName) => {
    const pokeFilter = pokelist.filter(
      (pokemon) => pokemon.name !== pokemonName
    );
    setPokelist(pokeFilter);
  };

  const addToPokedex = (pokemonToAdd) => {
    setIsAddPokemon(true)
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
    filterPokemon(pokemonToAdd.name);
    showModal();
  };

  const removeFromPokedex = (pokemonToRemove) => {
    setIsAddPokemon(false)
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return {
    page,
    setPage,
    addToPokedex,
    pokedex,
    setPokedex,
    removeFromPokedex,
    pokelist,
    setPokelist,
    fetchPokemons,
    showModal,
    closeModal,
    isModalOpen,
    isAddPokemon,
    setIsAddPokemon,
  };
}
