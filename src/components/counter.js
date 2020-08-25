import React from 'react';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';
import { getAtom, ATOM_COUNTER } from '../atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SELECTOR_INCREMENT_COUNTER, getSelector } from '../selectors';

const Counter = ({ dispatch }) => {
  const [counter, setCounter] = useRecoilState(getAtom(ATOM_COUNTER));
  const increment = useRecoilValue(getSelector(SELECTOR_INCREMENT_COUNTER));
  return (
    <>
      {/* <button onClick={() => dispatch(increment(1))}>+</button> */}
      {/* Recoil  */}
      <button onClick={() => setCounter(increment)}>+</button>
      {/* Redux (Old)  */}
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </>
  );
};

export default connect()(Counter);
