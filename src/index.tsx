import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import { MediaBreakpoint } from 'styles/breakpoints';
import GlobalStyle from 'components/global-style';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import createStore from './create-store';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/scss/bootstrap-grid.scss';
import 'react-toastify/dist/ReactToastify.min.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{ colors, MediaBreakpoint }}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
