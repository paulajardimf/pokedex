import styled from "styled-components";

export const DetailPageStyled = styled.main`
  background-color: #5d5d5d;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .container-detail {
    padding: 16px;
    width: 90%;
    height: 663px;
    background-color: ${(props) => props.color};
    border-radius: 12px;
    display: flex;
    position: relative;
    margin: 33px;
    color: #ffffff;
  }
  .container-img-front-back {
    width: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .img-front-back {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 8px;
      height: 282px;
      width: 16rem;
      img {
        height: 180px;
        width: 180px;
      }
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    color: #ffffff;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    text-transform: capitalize;
    color: #ffffff;
  }

  .container.tipo {
    width: 300px;
    margin-bottom: 52px;

    img {
      max-width: 100px;
      height: 32px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px dashed #ffffff;
      margin-right: 10px;
    }
  }

  .img-pokemon {
    width: 270px;
    height: 270px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
  }
`;
