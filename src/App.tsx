import React, { useState } from 'react';
import Main from './components/Main/Main';

import './App.css';

function App() {
  const initialState = [
    {
      id: 1,
      title: 'Play'
    },
    {
      id: 2,
      title: 'Demo'
    }
  ]
  const [btnLabel, setBtnLabel] = useState('One')
  const [btnState, setBtnState] = useState(initialState)
  const btnHandler = () => {
    if (btnState.length > 1) {
      setBtnLabel('Two')
      setBtnState([{
        id: 2,
        title: 'Demo'
      }])
    } else {
      setBtnLabel('Owo')
      setBtnState(initialState)
    }
  }
  return (
    <div className="App">
      <Main arrButtons={btnState} />
      <button className='demoOneBtn' onClick={btnHandler}>{btnLabel} button</button>
    </div>
  );
}

export default App;
