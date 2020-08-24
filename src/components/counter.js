import React from 'react';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';

const Counter = ({ dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </>
  );
};

export default connect()(Counter);
