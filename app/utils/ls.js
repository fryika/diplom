/**
 *
 * Simple Storage,
 * it is necessary to store simple things,
 * for example, an authorization token,
 *
 * do not use this for storage big data,
 * used localStorage as primary storage and cookie to fallback.
 *
 */

import { LS_STATE } from './constants';

const LocalStorage = {
  get: (name, returnDefault = null) => {
    const value = localStorage.getItem(name);
    if (value && typeof value === 'string') {
      return JSON.parse(value);
    }

    return returnDefault;
  },
  set: (name, data = null) => localStorage.setItem(name, JSON.stringify(data)),
  remove: (name) => localStorage.removeItem(name),
  clear: () => localStorage.clear(),
};

const getStorage = () => {
  if (localStorage !== undefined) {
    return LocalStorage;
  }

  throw new Error('Storage not defined');
};

export const get = (...args) => getStorage().get(...args);
export const set = (...args) => getStorage().set(...args);
export const remove = (...args) => getStorage().remove(...args);
export const clear = (...args) => getStorage().clear(...args);
export const loadState = () => {
  try {
    const storage = getStorage();
    const state = storage.get(LS_STATE, undefined);
    return state;
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    const storage = getStorage();
    storage.set(LS_STATE, state);
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }
};
