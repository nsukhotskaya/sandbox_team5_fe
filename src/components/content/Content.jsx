import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Login } from '../../pages'


const Content = () => {
    const location = useLocation();
    return (
            <Switch location={location}>
              <Route exact path="/">
                <Login />
              </Route>
            </Switch>
    );
  };

  export default Content;