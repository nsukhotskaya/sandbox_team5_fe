import React from 'react';
import { Provider } from 'react-redux';
import { useLocation, Route, Switch } from 'react-router-dom';
import { Login, Employee } from '../../pages';

const AppContent = ({ store }) => {
  const location = useLocation();
  return (
    <Provider store={store}>
      <Switch location={location}>
        {document.cookie.length > 1 ? (
          <Route exact path="/" component={Employee} />
        ) : (
          <Route exact path="/login" component={Login} />
        )}
      </Switch>
    </Provider>
  );
};

export default AppContent;
