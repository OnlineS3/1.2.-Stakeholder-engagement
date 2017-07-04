import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import exampleReducer from './example';
import CategoryReducer from './CategoryReducer';
console.log(exampleReducer)

const rootReducer = combineReducers({
  exampleReducer,
  categories: CategoryReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
