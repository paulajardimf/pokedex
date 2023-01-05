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
`;
