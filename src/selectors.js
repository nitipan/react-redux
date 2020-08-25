const { selector } = require('recoil');

const SELECTOR_INCREMENT_COUNTER = 'SELECTOR_INCREMENT_COUNTER';
const SELECTOR_DECREMENT_COUNTER = 'SELECTOR_DECREMENT_COUNTER';

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

export { SELECTOR_INCREMENT_COUNTER, SELECTOR_DECREMENT_COUNTER };
