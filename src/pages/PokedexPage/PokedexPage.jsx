import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PokedexPageStyled } from "./PokedexPageStyled";
import pokedexImg from "../../assets/pokedex.png";

export default function PokedexPage() {
  const { pokedex, isModalOpen } = useContext(GlobalContext);

  return (
    <PokedexPageStyled>
      {isModalOpen && <Modal />}
      <Header />
      <section className="container-pokemons">
        <h1 className="title">Meus Pokémons</h1>
        {pokedex.length === 0 && (
          <div className="pokedex">
            <h1>Pokedex vazia!</h1>
            <img src={pokedexImg} alt="pokedex" />
          </div>
        )}
        <section className="container-pokemon">
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard
                pokemonUrl={`${BASE_URL}pokemon/${pokemon.name}`}
                pokemon={pokemon}
                key={pokemon.url}
              />
            );
          })}
        </section>
      </section>
    </PokedexPageStyled>
  );
}
