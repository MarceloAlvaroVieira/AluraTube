import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    transition: .25s ease-in-out;
    font-family: sans-serif;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }

  body header{
    transition: .25s ease-in-out;
  }
  
  body {
    display: flex;
    flex: 1;
    background-color: ${({theme}) => theme.backgroundBase};
    transition: .3s ease-in-out;
    color: ${({theme}) => theme.textColorBase};
  }

  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;