import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    transition: all 0.6s ease-in-out;
  }
`;

export default GlobalStyle;
