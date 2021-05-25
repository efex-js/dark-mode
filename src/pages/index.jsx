import { useState } from 'react'
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import { VisibilityOff, Visibility } from '@gympass/yoga-icons';
import './index';
import { Container, ThemeSelector, Slide } from './style';

export default function Home() {
  const darkMode = useDarkMode();
  const [isChecked, setIsChecked] = useState(!darkMode.value);

  const toggleTheme = () => {
    darkMode.toggle();
    setIsChecked(!isChecked);
  }

  return (
    <>
      <Head>
        <title>Effex - Dark Mode</title>
        <meta name="description" content="Get dark mode for all app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Escolha o tema da aplicação: </h1>
        <ThemeSelector>
          <Visibility stroke="#702459" width={26} height={26} />
          <Slide checked={isChecked} onChange={toggleTheme} />
          <VisibilityOff stroke="#702459" width={26} height={26} />
        </ThemeSelector>
      </Container>
    </>
  )
}
