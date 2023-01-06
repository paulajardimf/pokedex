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
  left: 0;
  right: 0;

  .container-pokemons {
    margin: 30px;
    padding-bottom: 50px;
  }
  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
    margin-left: 35px;
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
    justify-content: center;
    animation: ${fadeIn} 0.5s ease-in-out;
    h1{
      color: #ffffff;
      font-size: 2rem;
      margin-bottom: 30px;
    }
    img {
      width: 400px;
    }
  }
`;
