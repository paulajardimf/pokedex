import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PokedexPageStyled = styled.header`
  background-color: #5d5d5d;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .container-pokemons {
    margin: 30px;
  }
  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .container-pokemon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pokedex {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4.5vh;
    animation: ${fadeIn} 0.5s ease-in-out;
    h1{
      color: #ffffff;
      font-size: 2rem;
      margin-bottom: 30px;
    }
    img {
      width: 450px;
    }
  }
`;
