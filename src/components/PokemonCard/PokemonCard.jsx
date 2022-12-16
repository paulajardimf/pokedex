import React, { useContext, useEffect, useState } from "react";
import { PokemonCardStyled } from "./PokemonCardStyled";
import pokeball from "../../assets/pngwing 2.png";
import { getPokemonType } from "../../constants/types";
import axios from "axios";
import { goToPokemonPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ pokemonUrl, pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState({});

  const navigate = useNavigate();

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);


  function getPokemonColor(pokemonType) {
    switch (pokemonType) {
      case "bug":
        return "#316520";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#70B873";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#8A8A8A";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#33A4F5";
      default:
        return "#8A8A8A";
    }
  }

  return (
    <PokemonCardStyled color={getPokemonColor(pokemonDetail.types && pokemonDetail.types[0].type.name)}>
      <section>
        <p>
          #
          {pokemonDetail.id < 10
            ? `0${pokemonDetail.id}`
            : pokemonDetail.id}
        </p>
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
          {pokemonDetail.types?.map((type, index) => {
            return <img src={getPokemonType(type.type.name)} key={index} />;
          })}
        </div>
        <p
          className="detalhes"
          onClick={() => goToPokemonPage(navigate, pokemon)}
        >
          Detalhes
        </p>
      </section>
      <section>
        <img
          className="img-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
          alt={pokemon.name}
        />
        <button>Capturar!</button>
      </section>
      <img className="pokeball" src={pokeball} alt="pokeball" />
    </PokemonCardStyled>
  );
};

export default PokemonCard;
