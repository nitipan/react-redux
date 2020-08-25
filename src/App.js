import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/counter';
import CounterDisplay from './components/counter-display';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <div className="App">
          <CounterDisplay />
          <Counter />
        </div>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
