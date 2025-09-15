import styled from "styled-components";
import { cores } from "../../styles";

import fechar from "../../assets/images/lixeira.png";

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
