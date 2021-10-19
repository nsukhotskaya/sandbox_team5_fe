import './App.sass';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { Login } from './pages';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/employee">
              <MainContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
