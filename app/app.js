import React from 'react';

import { render } from 'react-dom';

import './styles/main.scss';

import App from './components/App';
import ApplicationMenu from './components/ApplicationMenu';
import Home from './components/Home';
import CategoryView from './components/CategoryView';
import About from './components/About.js';
import Guide from './components/Guide.js';
import Related from './components/Related.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import values from 'object.values';
import Promise from 'promise-polyfill';
import assign from 'object.assign';

if (!window.Promise) {
  window.Promise = Promise;
}
if (!Object.values) {
    values.shim();
}
if (!Object.assign) {
    Object.assign = assign.shim();
}


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/category/" component={App}>
        <IndexRoute name="category" component={CategoryView}></IndexRoute>
      </Route>

      <Route path="/" component={App}>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/guide" component={Guide}>
        </Route>
        <Route path="/related_documents" component={Related}>
        </Route>
        <Route path="/region/:areaName" component={Home}>
          <IndexRoute name="area" component={Home}></IndexRoute>
        </Route>
        <Route path="/application" component={ApplicationMenu}>
        </Route>
        <Route path="/application/S3engagement" component={Home}>
        </Route>
        <IndexRoute name="home" component={Home}></IndexRoute>
        <Route path="/region/:areaName/:categoryId" component={CategoryView}></Route>
      </Route>

    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
