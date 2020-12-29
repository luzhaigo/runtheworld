import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import { MediaBreakpoint } from 'styles/breakpoints';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={{ colors, MediaBreakpoint }}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, { ...options } = {}) => {
  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};

export * from '@testing-library/react';

export { customRender as render };
