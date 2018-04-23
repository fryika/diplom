/**
 *
 * Global Actions
 *
 */

import {
  CHANGE_AUTH_USER_ACTION,
} from './constants';

export function changeAuthUser(authUser) {
  return {
    type: CHANGE_AUTH_USER_ACTION,
    authUser,
  };
}
