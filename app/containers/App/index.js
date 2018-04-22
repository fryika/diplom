/**
 *
 * App.js
 *
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'containers/Layout';

const theme = {
  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 1,
    outerMargin: 2,
    mediaQuery: 'only screen',
    container: {
      sm: 46,
      md: 61,
      lg: 76,
    },
    breakpoints: {
      xs: 0,
      sm: 48,
      md: 64,
      lg: 75,
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/" component={Layout} />
    </ThemeProvider>
  );
}
