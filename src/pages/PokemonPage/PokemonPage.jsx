import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext';
import { PokemonPageStyled } from './PokemonPageStyled'
import { BASE_URL } from "../../constants/url";
import axios from 'axios';

export default function PokemonPage() {
  const { page, setPage } = useContext(GlobalContext);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const params = useParams();
  console.log(params.name);

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
  console.log(pokemonDetail);

  return (
    <>
      <Header/>
      <PokemonPageStyled>
        <section className='container-pokemon' color="blue">
          <p>{pokemonDetail.name}</p>
          <div>
          </div>

        </section>
      </PokemonPageStyled>
    </>
  )
}
