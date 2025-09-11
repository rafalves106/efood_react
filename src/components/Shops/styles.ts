import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const Content = styled.div`
  margin: 0;
  padding: 8px;
  border: 1px solid;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Titulo = styled.h3`
  font-weight: 700;
  color: ${cores.salmao};
  font-size: 18px;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
