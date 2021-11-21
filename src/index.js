import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import {ThemeProvider} from './context'

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  console.log('h')
  hydrate(<ThemeProvider><App /></ThemeProvider>, rootElement);
} else {
  console.log('r')
  render(<ThemeProvider><App /></ThemeProvider>, rootElement);
}