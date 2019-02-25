import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
// need to import the reducers

export default combineReducers({
  users: usersReducer
});