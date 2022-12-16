import styled from "styled-components";

export const HomePageStyled = styled.header`
  background-color: #5d5d5d;
  display: flex;
  flex-direction: column;
  .container-pokemons {
    margin: 30px;
  }
  h1 {
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
