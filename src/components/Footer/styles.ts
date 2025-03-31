import styled from "styled-components";
import { cores } from "../../styles";

export const FooterBar = styled.div`
  background-color: ${cores.rosa};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  p {
    font-size: 10px;
    text-align: center;
  }
`;

export const Social = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;

  img {
    max-width: 24px;
    width: 100%;
  }
`;
