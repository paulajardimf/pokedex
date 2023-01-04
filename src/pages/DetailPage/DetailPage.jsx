import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Card, ContainerBar, DetailPageStyled } from "./DetailPageStyled";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { getPokemonType } from "../../constants/types";
import { getPokemonColor } from "../../utils/ReturnGetPokemonColor";
import pokeball from "../../assets/pngwing2.png";

export default function DetailPage() {
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

  const barColor = (statNumber) => {
    if (statNumber <= 50) {
      return "#ff7c2d";
    } else {
      return "#ffdd6a";
    }
  };

  const totalStats = (stat) => {
    return (
      stat[0].base_stat +
      stat[1].base_stat +
      stat[2].base_stat +
      stat[3].base_stat +
      stat[4].base_stat +
      stat[5].base_stat
    );
  };

  return (
    <>
      <Header />
      <DetailPageStyled>
        <h1 className="title">Detalhes</h1>
        <Card
          className="card"
          color={getPokemonColor(
            pokemonDetail.types && pokemonDetail.types[0].type.name
          )}
        >
          <img className="pokeball" src={pokeball} />
          <div className="container-img">
            <img src={pokemonDetail.sprites?.front_default} />
            <img src={pokemonDetail.sprites?.back_default} />
          </div>

          <div className="container-base-stats">
            <p className="title-base-stats">Base stats:</p>
            <div className="container-stats">
              {pokemonDetail.stats?.map((stat, index) => {
                return (
                  <>
                    <div className="stat" key={index}>
                      <div className="stat-name">
                        <p>{stat.stat.name}</p>
                        <p className="number-stat">{stat.base_stat}</p>
                      </div>
                      <div className="container-bar">
                        <ContainerBar
                          className="bar-color"
                          color={barColor(stat.base_stat)}
                          size={stat.base_stat}
                        ></ContainerBar>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="stat-total">
                <p>Total</p>
                <p>{pokemonDetail.stats && totalStats(pokemonDetail.stats)}</p>
                <div>
                  <ContainerBar
                    color={"none"}
                    size={150}
                  ></ContainerBar>
                </div>
              </div>
            </div>
          </div>

          <section className="container-details">
            <p>#0{pokemonDetail.id}</p>
            <h1>
              {pokemonDetail.name?.charAt(0).toUpperCase() +
                pokemonDetail.name?.slice(1)}
            </h1>
            <div className="container-types">
              {pokemonDetail.types?.map((type) => {
                return (
                  <img
                    key={type.type.name}
                    src={getPokemonType(type.type.name)}
                  />
                );
              })}
            </div>

            <section className="container-moves">
              <h1>Moves:</h1>

              <section className="container-move-types">
                <p>
                  {pokemonDetail.moves &&
                    pokemonDetail.moves[0].move.name.charAt(0).toUpperCase() +
                      pokemonDetail.moves[0].move.name?.slice(1)}
                </p>
                <p>
                  {pokemonDetail.moves &&
                    pokemonDetail.moves[1].move.name.charAt(0).toUpperCase() +
                      pokemonDetail.moves[1].move.name?.slice(1)}
                </p>
                <p>
                  {pokemonDetail.moves &&
                    pokemonDetail.moves[2].move.name.charAt(0).toUpperCase() +
                      pokemonDetail.moves[2].move.name?.slice(1)}
                </p>
                <p>
                  {pokemonDetail.moves &&
                    pokemonDetail.moves[3].move.name.charAt(0).toUpperCase() +
                      pokemonDetail.moves[3].move.name?.slice(1)}
                </p>
              </section>
            </section>
          </section>

          <img
            className="img-card"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
          />
        </Card>
      </DetailPageStyled>
    </>
  );
}
