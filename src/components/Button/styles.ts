import styled from "styled-components";
import { cores } from "../../styles";

import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.salmao};
  background-color: ${cores.rosa};
  padding: 6px 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.rosa};
  background-color: ${cores.salmao};
  padding: 6px 4px;
  text-decoration: none;
  cursor: pointer;
`;
