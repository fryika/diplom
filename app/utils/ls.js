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

export default function get(name, returnDefault = null) {
  return getStorage().get(name, returnDefault);
}

export function set(name, data) {
  return getStorage().set(name, data);
}

export function remove(name) {
  return getStorage().remove(name);
}

export function clear() {
  return getStorage().clear();
}
