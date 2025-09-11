// src/components/Button/styles.ts
import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.rosa};
  background-color: ${cores.salmao};
  padding: 6px 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;

interface ButtonLinkProps {
  variant?: "default" | "inverted";
}

export const ButtonLink = styled(Link)<ButtonLinkProps>`
  font-size: 14px;
  font-weight: 700;
  padding: 6px 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  color: ${(props) =>
    props.variant === "inverted" ? cores.rosa : cores.salmao};
  background-color: ${(props) =>
    props.variant === "inverted" ? cores.salmao : cores.rosa};
`;
