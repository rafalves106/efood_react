import styled from "styled-components";
import fundo from "../../assets/images/fundo.jpg";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  padding: 40px;
  width: 100%;
  height: 186px;

  a {
    color: ${cores.salmao};
    font-size: 18px;
    font-weight: 900;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartTitle = styled.h1`
  font-size: 36px;
  font-weigth: 900;
  text-align: center;
`;
