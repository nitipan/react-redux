const { selector } = require('recoil');

const SELECTOR_COUNTER = 'SELECTOR_COUNTER';

const selectors = {};

export function setSelector(key, fn) {
  if (!selectors[key]) {
    const sel = selector({
      key: key,
      // get: fn,
      set: fn,
    });

    selectors[key] = sel;
  }
}

export function getSelector(key) {
  return selectors[key];
}

export { SELECTOR_COUNTER };
