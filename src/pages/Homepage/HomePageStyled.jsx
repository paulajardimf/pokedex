import styled from "styled-components";

export const HomePageStyled = styled.main`
  ${(props) =>
      props.isModalOpen &&
      `
    backdrop-filter: blur(10px);
  `}
  background-color: #5d5d5d;
  display: flex;
  flex-direction: column;
  .container-pokemons {
    margin: 30px;
  }
  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
    margin-left: 35px;
  }
  .container-pokemon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
