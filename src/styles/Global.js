import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  input, button, body {
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    transition: background .15s;
  }
`

export default GlobalStyle;