import React from 'react';
import './index.css';
import App from './App';

import {render} from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
)
