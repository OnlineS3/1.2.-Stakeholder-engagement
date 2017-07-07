import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import exampleReducer from './example';
import CategoryReducer from './CategoryReducer';
import LoggedInReducer from './LoggedInReducer';
console.log(exampleReducer)

const rootReducer = combineReducers({
  logged_in: LoggedInReducer,
  categories: CategoryReducer,
  routing: routerReducer,
  form: formReducer,
  exampleReducer,
});

export default rootReducer;
