import './App.sass';
import React from 'react';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux/src';
import { BrowserRouter as Router } from 'react-router-dom';
import { loginReducer } from './store/reducers';
import { AppContent } from './components';

const store = createStore(loginReducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Router>
        <AppContent store={store} />
      </Router>
    </>
  );
}

export default App;
