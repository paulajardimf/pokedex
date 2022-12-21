import React, { useContext, useEffect, useState } from "react";
import { PokemonCardStyled } from "./PokemonCardStyled";
import pokeball from "../../assets/pngwing 2.png";
import { getPokemonType } from "../../constants/types";
import axios from "axios";
import { goToPokemonPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getPokemonColor } from "../../utils/ReturnGetPokemonColor";

const PokemonCard = ({ pokemonUrl, pokemon }) => {
  const { page, setPage} = useContext(GlobalContext);
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

  return (
    <PokemonCardStyled
      color={getPokemonColor(
        pokemonDetail.types && pokemonDetail.types[0].type.name
      )}
    >
      <section>
        <p>
          #{pokemonDetail.id < 10 ? `0${pokemonDetail.id}` : pokemonDetail.id}
        </p>
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
          {pokemonDetail.types?.map((type, index) => {
            return <img src={getPokemonType(type.type.name)} key={index} />;
          })}
        </div>
        <p
          className="detalhes"
          onClick={() => {
            goToPokemonPage(navigate, pokemon.name);
            setPage("PokemonPage"); 
          }}
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
