import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);
