import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routs from './Routs';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routs />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
