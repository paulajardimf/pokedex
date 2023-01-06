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

export const ScrollTopBtn = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5vh;
  right: 5vw;
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  font-size: 2rem;
  font-weight: 400;
  color: #5d5d5d;
  z-index: 4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
