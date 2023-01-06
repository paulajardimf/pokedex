import styled from "styled-components";

export const DetailPageStyled = styled.main`
  background-color: #5d5d5d;
  display: flex;
  align-items: center;
  flex-direction: column;
  

  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
    margin: 35px;
    align-self: flex-start;
  }

  .pokeball {
    position: absolute;
    top: 0;
    right: 0px;
    height: 700px;
  }

  .container-img {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    justify-content: center;
    gap: 40px;
    img {
      width: 282px;
      height: 282px;
      border-radius: 8px;
      background-color: #ffffff;
    }
  }

  .container-base-stats {
    align-self: center;
    width: 383px;
    height: 613px;
    background: #ffffff;
    border-radius: 8px;
    .title-base-stats {
      padding: 30px;
      align-self: flex-start;
      font-style: normal;
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 30px;
    }
    .container-stats {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      .stat {
        display: flex;
        align-items: center;
        border-top: 0.1px solid #dbdbdb;
        border-bottom: 0.1px solid #dbdbdb;
        .stat-name {
          display: flex;
          justify-content: end;
          font-weight: 300;
          padding: 5px 0;
          font-size: 0.875rem;
          flex-grow: 2;
          text-transform: capitalize;
          .number-stat {
            flex-grow: 0;
            padding: 0 20px;
            font-weight: 500;
          }
        }
        .container-bar {
          display: flex;
          justify-content: start;
          width: 150px;
        }
      }
      .stat-total {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 105px;
        padding: 5px 0;
        font-weight: 600;
        p {
          margin-left: 10px;
        }
      }
    }
  }

  .container-details {
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    p {
      width: 30px;
      height: 19px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      padding-top: 5vh;
      padding-bottom: 3vh;
    }

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 3rem;
      line-height: 58px;
      color: #ffffff;
    }
    .container-types {
      margin-top: 10px;
      display: flex;
      gap: 5px;

      img {
        max-width: 100px;
        height: 32px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px dashed #ffffff;
        margin-right: 8px;
      }
    }
    .container-moves {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 292px;
      height: 453px;
      bottom: 25px;
      background: #ffffff;
      border-radius: 8px;

      h1 {
        padding: 30px;
        color: #000000;
        align-self: flex-start;
        font-style: normal;
        font-weight: 900;
        font-size: 25px;
        line-height: 30px;
      }
    }

    .container-move-types {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding-left: 30px;
      p {
        height: 37px;
        width: auto;
        font-size: 0.875rem;
        color: #5d5d5d;
        background: #ececec;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        padding: 10px;
      }
    }
  }
  .img-card {
    width: 270px;
    height: 270px;
    position: absolute;
    top: -80px;
    right: 30px;
    z-index: 2;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  gap: 3vw;
  width: 90vw;
  height: 663px;
  left: 0px;
  top: 0px;
  background-color: ${(props) => props.color};
  border-radius: 37.8857px;
  margin-bottom: 50px;
  transition: box-shadow 0.2s ease;
`;

export const ContainerBar = styled.div`
  background-color: ${(props) => props.color};
  height: 10px;
  border-radius: 8px;
  ${(props) => `
    width: ${props.size}%;
  `}
`;
