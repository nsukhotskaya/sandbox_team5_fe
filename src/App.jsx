import './App.sass';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';
import { Employee, Login } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          {!localStorage.getItem('accessToken') ? (
            <Redirect to="/login" />
          ) : (
            <Employee />
          )}
        </Route>
        <Route exact path="/login">
          {localStorage.getItem('accessToken') ? (
            <Redirect to="/" />
          ) : (
            <Login />
          )}
        </Route>
        <Route>
          <h1>page Not Found 404</h1>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state.authorization;

export default connect(mapStateToProps)(App);
