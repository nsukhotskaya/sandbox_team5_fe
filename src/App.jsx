import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './components';

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
