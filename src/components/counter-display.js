import React from 'react';
import { connect } from 'react-redux';
import { useRecoilState } from 'recoil';
import { ATOM_COUNTER, getAtom } from '../atoms';
const CounterDisplay = () => {
  const [counter, setCounter] = useRecoilState(getAtom(ATOM_COUNTER));
  return (
    <>
      <div>Counter : {counter.counter}</div>
    </>
  );
};

// Recoil interceptor
export default CounterDisplay;
// export default connect((state) => {
//   return {
//     counter: state.counter,
//   };
// })(CounterDisplay);
