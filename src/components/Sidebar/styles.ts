import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const SideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  width: 100%;
  max-width: 360px;
  height: 100%;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    width: 100%;
    max-width: 100%;
    margin-bottom: 8px;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.rosa};
  margin-bottom: 16px;
`;

export const EmptyCart = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
`;
