import { createStore } from 'redux';
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './components/actions';

import { ATOM_COUNTER, setAtom, getAtom } from './atoms';
import { setSelector, SELECTOR_INCREMENT_COUNTER } from './selectors';

const appState = {
  counter: 0,
};

// Recoil interceptor
setAtom(ATOM_COUNTER, appState);

// Recoil: migrated selector
setSelector(SELECTOR_INCREMENT_COUNTER, {
  get: ({ get }) => {
    const state = get(getAtom(ATOM_COUNTER));
    return { ...state, counter: state.counter + 1 };
  },
});



function counterApp(state = appState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      // Recoil: move logic to use Recoil selector on line 15-18
      return { ...state, counter: (state.counter += action.num) };
    case COUNTER_DECREMENT:
      return { ...state, counter: (state.counter -= action.num) };
    default:
      return state;
  }
}

const store = createStore(counterApp);
export default store;
