/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  IS_LOADING_LOGIN_CHECKER_ACTION,
  IS_LOADING_EMAIL_CHECKER_ACTION,
  CHANGE_LOGIN_ACTION,
  CHANGE_EMAIL_ACTION,
  CHANGE_PASSWORD_ACTION,
  LOGIN_CHECKER_RESPONSE_ACTION,
  LOGIN_CHECKER_FAILED_ACTION,
  EMAIL_CHECKER_RESPONSE_ACTION,
  EMAIL_CHECKER_FAILED_ACTION,
  SUBMIT_ACTION,
  CHANGE_IS_SUBMITTED_ACTION,
  SUBMIT_FAILED_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeIsSubmitted(isSubmitted) {
  return {
    type: CHANGE_IS_SUBMITTED_ACTION,
    isSubmitted: !!isSubmitted,
  };
}

export function changeIsLoadingLoginChecker(isLoadingLoginChecker) {
  return {
    type: IS_LOADING_LOGIN_CHECKER_ACTION,
    isLoadingLoginChecker: !!isLoadingLoginChecker,
  };
}

export function changeIsLoadingEmailChecker(isLoadingEmailChecker) {
  return {
    type: IS_LOADING_EMAIL_CHECKER_ACTION,
    isLoadingEmailChecker: !!isLoadingEmailChecker,
  };
}

export function changeLogin(login) {
  return {
    type: CHANGE_LOGIN_ACTION,
    login,
  };
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL_ACTION,
    email,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD_ACTION,
    password,
  };
}

export function loginCheckerResponse(response) {
  return {
    type: LOGIN_CHECKER_RESPONSE_ACTION,
    response,
  };
}

export function loginCheckerFailed(error) {
  return {
    type: LOGIN_CHECKER_FAILED_ACTION,
    error,
  };
}

export function emailCheckerResponse(response) {
  return {
    type: EMAIL_CHECKER_RESPONSE_ACTION,
    response,
  };
}

export function emailCheckerFailed(error) {
  return {
    type: EMAIL_CHECKER_FAILED_ACTION,
    error,
  };
}

export function submit() {
  return {
    type: SUBMIT_ACTION,
  };
}

export function submitFailed(error) {
  return {
    type: SUBMIT_FAILED_ACTION,
    error,
  };
}
