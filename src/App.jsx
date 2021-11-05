import './App.sass';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';
import { Home, Login, CandidateCard } from './pages';

function App(props) {
  const { isAuthorized } = props;
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          {!isAuthorized ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route exact path="/login">
          {isAuthorized ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route>
          <Route exact path="/candidatecard" component={CandidateCard} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state.authorization;

export default connect(mapStateToProps)(App);
