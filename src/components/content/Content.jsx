import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Login, Internships } from '../../pages'


const Content = () => {
    const location = useLocation();
    return (
      <Switch location={location}>
       <Route exact path="/" component={Login} />
       <Route exact path="/internships" component={Internships} />
     </Switch>
    );
  };

  export default Content;