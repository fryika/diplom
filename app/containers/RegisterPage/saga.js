import { take, takeLatest, call, put, select, throttle, race } from 'redux-saga/effects';
import { post } from 'utils/apiRequest';
import { API_USERS_LOGIN_CHECKER, API_USERS_EMAIL_CHECKER, API_USERS_REGISTER } from 'utils/constants';

import { SUBMIT_ACTION, CHANGE_LOGIN_ACTION, CHANGE_EMAIL_ACTION, SAGA_LOGIN_CHECKER_CANCEL, SAGA_EMAIL_CHECKER_CANCEL } from './constants';
import { changeIsLoadingLoginChecker, changeIsLoadingEmailChecker, loginCheckerResponse, loginCheckerFailed, emailCheckerResponse, emailCheckerFailed, changeIsSubmitted, submitFailed } from './actions';
import makeSelectRegisterPage from './selectors';

// Individual exports for testing
export function* changeIsLoadingLoginCheckerBeforeThrottle() {
  yield put(changeIsLoadingLoginChecker(true));
}

export function* changeIsLoadingEmailCheckerBeforeThrottle() {
  yield put(changeIsLoadingEmailChecker(true));
}

export function* loginCheckerBackground() {
  const registerPage = yield select(makeSelectRegisterPage());
  const { login } = registerPage;

  try {
    yield put(changeIsLoadingEmailChecker(false));

    const resp = yield call(post, API_USERS_LOGIN_CHECKER, {
      login,
    });

    yield put(loginCheckerResponse(resp));
  } catch (err) {
    yield put(loginCheckerFailed(err));
  }
}

export function* startLoginCheckerBackground() {
  yield put({ type: SAGA_LOGIN_CHECKER_CANCEL });
  yield race({
    task: call(loginCheckerBackground),
    cancel: take(SAGA_LOGIN_CHECKER_CANCEL),
  });
}

export function* emailCheckerBackground() {
  const registerPage = yield select(makeSelectRegisterPage());
  const { email } = registerPage;

  try {
    yield put(changeIsLoadingEmailChecker(false));

    const resp = yield call(post, API_USERS_EMAIL_CHECKER, {
      email,
    });

    yield put(emailCheckerResponse(resp));
  } catch (err) {
    yield put(emailCheckerFailed(err));
  }
}

export function* startEmailCheckerBackground() {
  yield put({ type: SAGA_EMAIL_CHECKER_CANCEL });
  yield race({
    task: call(emailCheckerBackground),
    cancel: take(SAGA_EMAIL_CHECKER_CANCEL),
  });
}

export function* startSubmitting() {
  const registerPage = yield select(makeSelectRegisterPage());
  const { login, password, email } = registerPage;

  yield put(changeIsSubmitted(true));

  try {
    const resp = yield call(post, API_USERS_REGISTER, { login, password, email });
    yield put(submitResponse(resp));
  } catch (err) {
    yield put(submitFailed(err));
  }
}

export default function* defaultSaga() {
  yield takeLatest(CHANGE_LOGIN_ACTION, changeIsLoadingLoginCheckerBeforeThrottle);
  yield throttle(350, CHANGE_LOGIN_ACTION, startLoginCheckerBackground);

  yield takeLatest(CHANGE_EMAIL_ACTION, changeIsLoadingEmailCheckerBeforeThrottle);
  yield throttle(350, CHANGE_EMAIL_ACTION, startEmailCheckerBackground);

  yield takeLatest(SUBMIT_ACTION, startSubmitting);
}
