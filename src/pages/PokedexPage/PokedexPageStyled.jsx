import styled from "styled-components";

export const PokedexPageStyled = styled.header`
  background-color: #5d5d5d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .container-pokemons {
    margin: 30px;
  }
  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
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
    padding-top: 7vh;
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
