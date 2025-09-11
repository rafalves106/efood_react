import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 260px;
    padding: 25px 0 32px;
  }
`;

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branca};
`;
