import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

import fechar from "../../assets/images/lixeira.png";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
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
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    width: 100%;
    max-width: 100%;
  }
`;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
