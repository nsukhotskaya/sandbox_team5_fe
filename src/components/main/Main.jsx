import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer } from '../footer';
import { Internships, Candidates, ProfileCard } from '../../pages';
import './Main.sass';

function Main() {
  return (
    <Box className="main">
      <Box id="content">
        <Box className="card" backgroundColor="background.paper">
          <Switch>
            <Route exact path="/home">
              <ProfileCard />
            </Route>
            <Route exact path="/home/internships">
              <Internships />
            </Route>
            <Route exact path="/home/candidates">
              <Candidates />
            </Route>
          </Switch>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Main;
