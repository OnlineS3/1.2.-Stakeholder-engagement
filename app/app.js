import React from 'react';

import { render } from 'react-dom';

import './styles/main.scss';

import App from './components/App';
import Home from './components/Home';
import CategoryView from './components/CategoryView';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/:areaName" component={Home}></Route>
        <IndexRoute name="home" component={Home}></IndexRoute>
      </Route>
      <Route path="/category/" component={App}>
        <IndexRoute name="category" component={CategoryView}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
