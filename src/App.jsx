import './App.sass';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';
import { Employee, Internships, Candidates, Login } from './pages';

function App(props) {
  const { history } = props;
  return (
    <ThemeProvider theme={theme}>
      <Switch location={history.location}>
        {!localStorage.getItem('accessToken') && (
          <Route exact path="/login" component={Login} />
        )}
        {localStorage.getItem('accessToken') && (
          <>
            <Route exact path="/" component={Employee} />
            <Route exact path="/internships" component={Internships} />
            <Route exact path="/candidates" component={Candidates} />
          </>
        )}
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state.authorization;

export default connect(mapStateToProps)(App);
