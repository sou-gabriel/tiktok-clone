import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    min-height: 100vh;
  }

  input, button {
    background: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  fieldset {
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
