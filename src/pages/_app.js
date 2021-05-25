import { useEffect, useState } from 'react';
import GlobalStyle from '../../globalStyle';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderYoga } from '@gympass/yoga';
import light from '../themes/light';
import dark from '../themes/dark';
import useDarkMode from 'use-dark-mode';

function MyApp({ Component, pageProps }) {
  const [ isMounted, setIsMounted ] = useState(false);
  const darkMode = useDarkMode();
  const theme = darkMode.value ? light : dark;

  useEffect(() => {
    setIsMounted(true)
  }, []);

  return (
    <ThemeProviderYoga>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </ThemeProviderYoga>
  )
}

export default MyApp;
