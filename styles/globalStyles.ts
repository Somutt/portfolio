import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.font.sizes.default};
    font-family: ${({ theme }) => theme.font.family.primary};
  }

  a, a:link, a:hover, a:visited, a:active {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

`;
