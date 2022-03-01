import styled from "styled-components";
import { Props } from "./types";
export const SidebarWrapper = styled.div<Props>`
  position: absolute;
  left: 0%;
  top: 0%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #4e4e50;

  transition: ease-in-out 0.5s;
  z-index: 100;

  transition: width 0.8s;

  width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
`;
