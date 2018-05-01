import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import reducers from './reducers';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux'
import initialState from './data/initialState';

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(...middleware))
);

const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App store={store} />
      </Router>
    </Provider>,
    node1);
}