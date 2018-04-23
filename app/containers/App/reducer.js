/**
 *
 * Global Reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_AUTH_USER_ACTION,
} from './constants';

const initialState = fromJS({
  authUser: null,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTH_USER_ACTION:
      return state.set('authUser', fromJS(action.authUser));
    default:
      return state;
  }
}

export default globalReducer;
