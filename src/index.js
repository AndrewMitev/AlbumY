import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);