import styled from "styled-components";

export const PokemonCardStyled = styled.div`
  padding: 16px;
  width: 440px;
  height: 210px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 33px;
  color: #ffffff;

  p {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
  }
  .name{
    text-transform: capitalize;
  }

  .container.tipo {
    width: 250px;
    margin-bottom: 52px;

    img {
      max-width: 100px;
      height: 32px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px dashed #ffffff;
      margin-right: 8px;
    }
  }

  .detalhes{
    position: absolute;
    bottom: 20px;
    color: #ffffff;
  }

  .img-pokemon {
    width: 193px;
    height: 193px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 22px;
    z-index: 2;
    color: #000;
  }
  .pokeball {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

