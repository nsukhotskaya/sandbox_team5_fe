import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Internships, Candidates, ProfileCard } from '../index';
import './Home.sass';

function Home() {
  return (
    <Box display="flex" height="100vh">
      <CssBaseline />
      <Header />
      <Box
        className="main"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        location={useLocation()}
      >
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
    </Box>
  );
}

export default Home;
