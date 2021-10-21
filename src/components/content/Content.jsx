import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Login, Employee } from '../../pages';

const Content = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/" component={Login} />
      <Route exact path="/employee" component={Employee} />
    </Switch>
  );
};

export default Content;
