import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Buttons from './Button';

function App() {
  const name = 'John';
  return (

    <div className="App">
      <Greetings name={name}/>
      <Buttons/>
    </div>
  );
}

export default App;
