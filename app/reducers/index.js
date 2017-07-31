import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import exampleReducer from './example';
import CategoryReducer from './CategoryReducer';
import AreaReducer from './AreaReducer';
import CommentReducer from './CommentReducer';
import LoggedInReducer from './LoggedInReducer';
import MenuReducer from './MenuReducer';
import ModalReducer from './ModalReducer';
import SortbyReducer from './SortbyReducer';

const rootReducer = combineReducers({
  user: LoggedInReducer,
  categories: CategoryReducer,
  areas: AreaReducer,
  comments: CommentReducer,
  menuOpen: MenuReducer,
  modals: ModalReducer,
  routing: routerReducer,
  form: formReducer,
  sortby: SortbyReducer,
  exampleReducer,
});

export default rootReducer;
