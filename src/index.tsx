import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import { MediaBreakpoint } from 'styles/breakpoints';
import GlobalStyle from 'components/global-style';
import { Normalize } from 'styled-normalize';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/scss/bootstrap-grid.scss';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <ThemeProvider theme={{ colors, MediaBreakpoint }}>
    <Normalize />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

reportWebVitals();
