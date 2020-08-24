const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

function increment(num) {
  return {
    type: COUNTER_INCREMENT,
    num,
  };
}

function decrement(num) {
  return {
    type: COUNTER_DECREMENT,
    num,
  };
}

export { COUNTER_DECREMENT, COUNTER_INCREMENT, increment, decrement };
