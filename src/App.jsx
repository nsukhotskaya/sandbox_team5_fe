import './App.sass';
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';
import { Home, Login } from './pages';

function App(props) {
  const { isAuthorized } = props;
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={theme}>
      {isAuthorized ? (
        <>
          <Redirect to={pathname} />
          <Route path={pathname} component={Home} />
        </>
      ) : (
        <>
          <Redirect to="/login" />
          <Route path="/login" component={Login} />
        </>
      )}
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state.authorization;

export default connect(mapStateToProps)(App);
