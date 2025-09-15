import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const cores = {
  branca: "#FFFFFF",
  bege: "#FFF8F2",
  salmao: "#E66767",
  rosa: "#FFEBD9",
  text: "#4B4B4B",
};

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.bege};
  color: ${cores.salmao};

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  
  a {
    text-decoration: none;
  }}`;

export const Logo = styled.img`
  max-width: 125px;
  width: 100%;
`;
