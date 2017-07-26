import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import tescoReducers from './reducers/allReducers';

import Login from './components/Login';
//import LoginNew from './components/new/Login';

import getChecks from './actions/index';

const logger = createLogger();
const store = createStore(
    tescoReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Login store={store}/>
    </Provider>,
    document.getElementById('root')
);

//GraphQL CODE......
console.log(store);
//store.dispatch(getChecks(store.dispatch));
//.then(() => console.log(store.getState()))
