import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Content, Footer } from './components';

function App() {
  return (
    <Router>
      <Footer />
      <Content />
    </Router>
  );
}

export default App;
