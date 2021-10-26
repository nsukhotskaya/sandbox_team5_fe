import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Login, Employee, ProfileCard } from '../../pages';

const AppContent = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/" component={Login} />
      <Route exact path="/employee" component={Employee} />
      <Route exact path="/profilecard" component={ProfileCard} />
    </Switch>
  );
};

export default AppContent;
