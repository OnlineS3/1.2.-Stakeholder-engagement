import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
