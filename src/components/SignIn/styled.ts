import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;

  z-index: 10000000;
  background: transparent;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
`;
export const ModalBox = styled.div`
  position: relative;
  top: 17.5%;
  left: 35%;

  backdrop-filter: blur(10px);
  width: 30vw;

  background-color: #1a1a1d;
  z-index: 10000001;
  padding-top: 2%;
`;
