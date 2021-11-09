import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Internships, Candidates, ProfileCard } from '../index';
import './Home.sass';

function Home() {
  return (
    <Box display="flex" height="100vh">
      <CssBaseline />
      <Header />
      <Box className="contentWrapper">
        <Box id="content">
          <Box className="card" backgroundColor="background.paper">
            <Switch>
              <Route exact path="/profile">
                <ProfileCard />
              </Route>
              <Route exact path="/internships">
                <Internships />
              </Route>
              <Route path="/candidates/:id">
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
