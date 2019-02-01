import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App/App';

console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);