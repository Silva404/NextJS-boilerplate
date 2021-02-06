import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    color: #550;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystem, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, , 'Open Sans', 'Helvetica Neue',sans-serif;
  }
`

export default GlobalStyles
