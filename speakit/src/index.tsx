import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './firebase/config';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`;

ReactDOM.render(
  <React.Fragment>
    <Global />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
