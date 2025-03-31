import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  .container {
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
