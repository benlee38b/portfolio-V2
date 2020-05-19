import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
   background: #ACC8E5






    // background-color: #E4DFDA
  }
`;

export default GlobalStyles;
