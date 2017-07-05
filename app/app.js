import React from 'react';

import { render } from 'react-dom';

import './styles/main.scss';

import App from './components/App';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute name="home" component={Home}></IndexRoute>
      </Route>
      <Route path="/category/" component={App}>
        <IndexRoute name="category" component={CategoryPage}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
