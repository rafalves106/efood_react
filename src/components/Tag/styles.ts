import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from ".";

export const TagContainer = styled.h3<Props>`
  font-size: ${(props) => (props.size === "big" ? "32px" : "10px")};
  font-weight: ${(props) => (props.size === "big" ? "100" : "700")};
  padding: ${(props) => (props.size === "big" ? "0px" : "6px 4px")};
  color: ${(props) => (props.size === "big" ? cores.branca : cores.rosa)};
  background-color: ${(props) =>
    props.size === "big" ? "transparent" : cores.salmao};
  display: inline-block;
`;
