/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_LOGIN_ACTION,
  CHANGE_EMAIL_ACTION,
  CHANGE_PASSWORD_ACTION,
  LOGIN_CHECKER_RESPONSE_ACTION,
  LOGIN_CHECKER_FAILED_ACTION,
  EMAIL_CHECKER_FAILED_ACTION,
  EMAIL_CHECKER_RESPONSE_ACTION,
  CHANGE_IS_SUBMITTED_ACTION,
  SUBMIT_FAILED_ACTION,
} from './constants';

const initialState = fromJS({
  isSubmitted: false,
  errorMessage: '',

  login: '',
  loginIsChecked: false,
  loginIsFree: false,

  email: '',
  emailIsChecked: false,
  emailIsFree: false,

  password: '',
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FAILED_ACTION:
      return state.set('isSubmitted', false)
        .set('errorMessage', action.error.message);
    case CHANGE_IS_SUBMITTED_ACTION:
      return state.set('isSubmitted', action.isSubmitted);
    case LOGIN_CHECKER_FAILED_ACTION:
      return state.set('loginIsChecked', true).set('loginIsFree', false);
    case LOGIN_CHECKER_RESPONSE_ACTION:
      return state.set('loginIsChecked', true).set('loginIsFree', action.response.bOk);
    case EMAIL_CHECKER_FAILED_ACTION:
      return state.set('emailIsChecked', true).set('emailIsFree', false);
    case EMAIL_CHECKER_RESPONSE_ACTION:
      return state.set('emailIsChecked', true).set('emailIsFree', action.response.bOk);
    case CHANGE_LOGIN_ACTION:
      return state.set('login', action.login).set('errorMessage', '');
    case CHANGE_EMAIL_ACTION:
      return state.set('email', action.email).set('errorMessage', '');
    case CHANGE_PASSWORD_ACTION:
      return state.set('password', action.password).set('errorMessage', '');
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default registerPageReducer;
