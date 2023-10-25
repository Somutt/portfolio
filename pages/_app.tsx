import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { Base } from '../src/templates/Base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Component {...pageProps} />
      </Base>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
