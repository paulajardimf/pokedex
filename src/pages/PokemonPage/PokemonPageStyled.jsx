import styled from "styled-components";

export const PokemonPageStyled = styled.header`
  background-color: #5d5d5d;
  height: 100vh;
  display: flex;

  .container.pokemon{
    background-color: ${(props) => props.color};
    width: 90%;
    height: 663px;
  }
`;
