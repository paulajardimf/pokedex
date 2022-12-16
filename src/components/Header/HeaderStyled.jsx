import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #ffffff;
  height: 10rem;
  display: flex;
  position: relative;
  align-items: center;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    background-color: #33a4f5;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 30px;
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);
  }
`;
