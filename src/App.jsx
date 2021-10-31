import './App.sass';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { Login, Employee } from './pages';

function App(state) {
  const location = useLocation();
  const { isAuthorized } = state;
  return (
    <>
      <Switch location={location}>
        <Route exact path="/">
          {!isAuthorized ? <Redirect to="/login" /> : <Employee />}
        </Route>
        <Route exact path="/login">
          {isAuthorized ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
