import styled from "styled-components";
import fundo from "../../assets/images/fundo.jpg";

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${fundo});
  padding: 40px;
  width: 100%;
  height: 344px;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weigth: 900;
  text-align: center;
`;
