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

  .button-pokedex {
    background-color: #33a4f5;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem; 
    position: absolute;
    top: 50%;
    left: 87%;
    transform: translate(-50%, -50%);
  }

  .button-homepage{
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: underline;
    margin-left: 30px;
  }
  .button-delete {
    background-color: #FF6262;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    color: #ffffff;
    font-weight: 500;
    font-size: 1rem; 
    position: absolute;
    top: 50%;
    left: 87%;
    transform: translate(-50%, -50%);
  }
  .button-add {
    background-color: #70B873;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    color: #ffffff;
    font-weight: 500;
    font-size: 1rem; 
    position: absolute;
    top: 50%;
    left: 87%;
    transform: translate(-50%, -50%);
  }
`;
