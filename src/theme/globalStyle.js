import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  h1 {
  }
`

export const gameTheme = {
  colors: {
    accentDarken: '#AE3235',
    accentDefault: '#C84A48',
    accentLighten: '#D1524F',

    helperSuccess: '#27AE60',
    helperError: '#FF0F10',

    black: '#212429',
    blackGray4: '#495057',
    blackGray3: '#ACB5BD',
    blackGray2: '#DDE2E5',
    white: '#FBFCFD'
  }
};

export const museumTheme = {
  colors: {
    accentDarken: '#AE3235',
    accentDefault: 'green',
    accentLighten: '#D1524F',

    helperSuccess: '#27AE60',
    helperError: '#FF0F10',

    black: '#212429',
    blackGray4: '#495057',
    blackGray3: '#ACB5BD',
    blackGray2: '#DDE2E5',
    white: '#FBFCFD'
  }
};