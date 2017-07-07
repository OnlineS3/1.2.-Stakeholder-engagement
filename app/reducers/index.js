import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import exampleReducer from './example';
import CategoryReducer from './CategoryReducer';
import LoggedInReducer from './LoggedInReducer';
import MenuReducer from './MenuReducer';
console.log(exampleReducer)

const rootReducer = combineReducers({
  user: LoggedInReducer,
  categories: CategoryReducer,
  menuOpen: MenuReducer,
  routing: routerReducer,
  form: formReducer,
  exampleReducer,
});

export default rootReducer;
