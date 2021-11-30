import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  body {
    font-family: 'Cormorant Garamon';
    background: linear-gradient(to right, #ece9e6, #ffffff)
    /* color: white; */

  }
  a {
    text-decoration: none;
  }

  button {
    padding: 9px 25px;
    background-color: #726dfe;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: white;

    &:hover {
      background-color: #938ffe;
    }
  }
`;

export default GlobalStyles;
