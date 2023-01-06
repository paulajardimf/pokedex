import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomePageStyled, ScrollTopBtn } from "./HomePageStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import Modal from "../../components/Modal/Modal";
import { BASE_URL } from "../../constants/url";
import Footer from "../../components/Footer/Footer";

export default function Homepage() {
  const { pokedex, pokelist, fetchPokemons, isModalOpen } =
    useContext(GlobalContext);

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

  useEffect(() => {
    document
      .getElementById("scroll-top-btn")
      .addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }, []);

  return (
    <>
    <HomePageStyled isModalOpen={isModalOpen}>
      {isModalOpen && <Modal />}
      <Header />
      <section className="container-pokemons">
        <h1 className="title">Todos os Pokémons</h1>
        <section className="container-pokemon">
          {filteredPokemonlist().map((pokemon) => {
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
      <ScrollTopBtn id="scroll-top-btn">^</ScrollTopBtn>
    </HomePageStyled>
    <Footer />
    </>
  );
}
