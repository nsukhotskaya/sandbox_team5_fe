import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CssBaseline } from '@mui/material';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from '../../components';
import {
  Internships,
  Candidates,
  UserProfile,
  InternshipPage,
  CandidateProfile,
  NotFoundPage,
  EmployeesProfile,
} from '../index';
import './Home.sass';
import { fetchUserInfo } from '../../store/commands';

const Home = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <Box display="flex" height="100vh">
      {userInfo.roleType && (
        <>
          <CssBaseline />
          <Header />
          <Box className="contentWrapper">
            <Box id="content">
              <Box className="card" backgroundColor="background.paper">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/profile" />
                  </Route>
                  <Route exact path="/profile">
                    <UserProfile />
                  </Route>
                  <Route exact path="/profile/:id">
                    <EmployeesProfile />
                  </Route>
                  <Route exact path="/internships">
                    {userInfo.roleType === 'Interviewer' ? (
                      <NotFoundPage />
                    ) : (
                      <Internships />
                    )}
                  </Route>
                  <Route path="/candidates/:id">
                    {userInfo.roleType === 'Interviewer' ? (
                      <NotFoundPage />
                    ) : (
                      <Candidates />
                    )}
                  </Route>
                  <Route exact path="/candidate/:id">
                    <CandidateProfile />
                  </Route>
                  <Route exact path="/internshipPage/:id">
                    {userInfo.roleType === 'Interviewer' ? (
                      <NotFoundPage />
                    ) : (
                      <InternshipPage />
                    )}
                  </Route>
                  <Route path="/">
                    <NotFoundPage />
                  </Route>
                </Switch>
              </Box>
              <Footer />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
