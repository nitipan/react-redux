import React from 'react';
import { connect } from 'react-redux';
const CounterDisplay = ({ counter }) => {
  console.log(counter);
  return (
    <>
      <div>Counter : {counter}</div>
    </>
  );
};

export default connect((state) => {
  return {
    counter: state.counter,
  };
})(CounterDisplay);
