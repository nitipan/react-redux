const { atom } = require('recoil');

const ATOM_COUNTER = 'ATOM_COUNTER';

const atoms = {};

export function setAtom(key, defaultValue) {
  if (!atoms[key]) {
    const aAtom = atom({
      key: key,
      default: defaultValue,
    });
    atoms[key] = aAtom;
  }
}

export function getAtom(key) {
  return atoms[key];
}

export { ATOM_COUNTER };
