import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = { id: null }

const sessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let userId = Object.keys(action.user)[0];
      return {id: userId};
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}

export default sessionReducer;