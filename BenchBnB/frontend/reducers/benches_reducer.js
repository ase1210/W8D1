import { merge } from 'lodash';
import { RECEIVE_ALL_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const benchesReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_BENCHES:
      return action.benches;
    // case RECEIVE_BENCH:
    //   return merge({}, state, {action[bench]})
    default:
      return state;
  }
}

export default benchesReducer;