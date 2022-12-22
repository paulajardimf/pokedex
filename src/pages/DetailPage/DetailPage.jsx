import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { DetailPageStyled } from "./DetailPageStyled";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { getPokemonType } from "../../constants/types";
import { getPokemonColor } from "../../utils/ReturnGetPokemonColor";

export default function DetailPage() {
  const { page, setPage } = useContext(GlobalContext);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const params = useParams();

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon/${params.name}`);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <DetailPageStyled>
        <h1 className="title">Detalhes</h1>
        <div
          className="container-detail"
          color={getPokemonColor(
            pokemonDetail.types && pokemonDetail.types[0].type.name
          )}
        >
          <section className="container-img-front-back">
            <div className="img-front-back">
              <img
                className="img-front-back"
                src={pokemonDetail.sprites?.front_default}
                alt={pokemonDetail.name}
              />
            </div>
            <div className="img-front-back">
              <img
                className="img-front-back"
                src={pokemonDetail.sprites?.back_default}
                alt={pokemonDetail.name}
              />
            </div>
          </section>
          <p>
            #{pokemonDetail.id < 10 ? `0${pokemonDetail.id}` : pokemonDetail.id}
          </p>
          <h2>{pokemonDetail.name}</h2>
          <div className="container-tipo">
            {pokemonDetail.types?.map((type, index) => {
              return <img src={getPokemonType(type.type.name)} key={index} />;
            })}
          </div>
          <img
            className="img-pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
            alt={pokemonDetail.name}
          />
        </div>
      </DetailPageStyled>
    </>
  );
}
