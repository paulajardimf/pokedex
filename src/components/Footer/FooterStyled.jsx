import styled from "styled-components";

export const FooterStyled = styled.header`
  background-color: #3756B4;
  color: #ffffff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  padding: 0 80px;
  letter-spacing: 0.1rem;
  font-weight: 600;

  div{
    width: 90px;
    display: flex;
    justify-content: space-between;
  }

  img{
    width: 35px;
    cursor: pointer;
  }
`