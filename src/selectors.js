const { selector } = require('recoil');

const SELECTOR_COUNTER = 'SELECTOR_COUNTER';

const selectors = {};

export function setSelector(key, options) {
  if (!selectors[key]) {
    const sel = selector({ ...options, key });

    selectors[key] = sel;
  }
}

export function getSelector(key) {
  return selectors[key];
}

export { SELECTOR_COUNTER };
