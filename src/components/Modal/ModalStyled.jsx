import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 3;
  position: fixed;
  animation: ${fadeIn} 0.1s ease-in-out;
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: 451px;
    height: 222px;
    border-radius: 12px;
    position: sticky;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 3rem;
    font-weight: 800;
  }
  p {
    font-size: 1rem;
    font-weight: 800;
  }
`;
