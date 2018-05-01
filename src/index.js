import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import 'babel-polyfill'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import reducers from './reducers';

// just bring in sdome intial data to seed the app
import initialState from './data/initialState';

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(
        <Router>
            <App store={store}/>
        </Router>,
        node1);
}