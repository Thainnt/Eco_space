import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  body {
    font-family: 'Cormorant Garamon';
  }
  a {
    text-decoration: none;
  }

  button {
    padding: 9px 25px;
    background-color: #1976d1;
    border: none;
    background-image: linear-gradient(
      to right,
      #141e30 0%,
      #243b55 51%,
      #141e30 100%
    );

    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: white;

    &:hover {
      background-color: burlywood;
    }
  }
`;

export default GlobalStyles;
