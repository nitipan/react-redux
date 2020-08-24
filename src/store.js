import { createStore } from 'redux';
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './components/actions';

const appState = {
  counter: 0,
};

function counterApp(state = appState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, counter: (state.counter += action.num) };
    case COUNTER_DECREMENT:
      return { ...state, counter: (state.counter -= action.num) };
    default:
      return state;
  }
}

const store = createStore(counterApp);
export default store;
