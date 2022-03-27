import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import { themeInterface } from './interfaces';
import { Provider } from 'react-redux';
import store from './store';

const theme: themeInterface = {
  colors: {
    brightGreen: "#00ff00",
    green: "#00c800",
    darkGreen: "#00ff0080"
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

