import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import {
  Login,
  Employee,
  Candidates,
  Internships,
  ProfileCard,
  CandidateCard,
} from '../../pages';

const AppContent = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/" component={Login} />
      <Route exact path="/employee" component={Employee} />
      <Route exact path="/profile" component={ProfileCard} />
      <Route exact path="/internships" component={Internships} />
      <Route exact path="/candidates" component={Candidates} />
      <Route exact path="/candidatecard" component={CandidateCard} />
    </Switch>
  );
};

export default AppContent;
