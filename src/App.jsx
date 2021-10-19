import './App.sass';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employee from './pages/employee/Employee';
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
              <Employee />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
