import './App.scss';
import React from 'react';
import { BrowserRouter as Router, useLocation, Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router';

const PagesAll = () => {
  const location = useLocation();

  return (
    <div className="pages">
          <Switch location={location}>
            <Route exact path="/">
           {/* the name of page  */}
            </Route>
          </Switch>
    </div>
  );
};

function App() {
  return (
    <Router> 
      <div className="App">
        <PagesAll />
      </div> 
    </Router>
 
  );
}

export default App;
