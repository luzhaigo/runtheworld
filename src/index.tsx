import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import { MediaBreakpoint } from 'styles/breakpoints';
import GlobalStyle from 'components/global-style';
import { Normalize } from 'styled-normalize';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={{ colors, MediaBreakpoint }}>
    <Normalize />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

reportWebVitals();
