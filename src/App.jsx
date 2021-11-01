import './App.sass';
// import React, { useEffect } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';

import { Employee, Internships, Candidates, Login } from './pages';

function App(props) {
  const { isAuthorized } = props;
  // useEffect(() => {
  //   if (!isAuthorized) {
  //     history.push('/login');
  //   }
  // });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* {isAuthorized && <div>Header</div>} */}
        <Switch>
          {/* <Route exact path="/" component={Employee} /> */}
          <Route exact path="/">
            {isAuthorized ? <Employee /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={Login} />
          <Route path="/internships" component={Internships} />
          <Route path="/candidates" component={Candidates} />
        </Switch>

        <div>
          <Link to="/">Home</Link>
          <Link to="/internships">Internships</Link>
          <Link to="/login">Login</Link>
        </div>
        {/* {!isAuthorized && <div>Footer</div>} */}
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state.authorization;

export default connect(mapStateToProps)(App);
