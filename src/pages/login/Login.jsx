import React from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  Card,
  Button,
  TextField,
  Stack,
  Box,
  FormControl,
} from '@mui/material';
import { userLogIn } from '../../store/actions';

import './Login.sass';
import { Footer } from '../../components';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';

const Login = (props) => {
  const { message } = props;
  const smallScreen = useMediaDown('sm');
  const state = {
    email: '',
    password: '',
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    state[name] = value;
  };

  const handleSubmit = () => {
    props.userLogIn(state);
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const handleForm = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Box className="loginContainer">
      <Box className="loginCardWrapper">
        <FormControl onKeyPress={handleForm} onSubmit={preventDefault}>
          <Card
            variant="outlined"
            className={smallScreen ? 'loginCardMobile' : 'loginCard'}
          >
            <Typography
              m={smallScreen ? '10px' : '30px'}
              variant="h5"
              color="#1976d2"
              textAlign="center"
            >
              {getFieldLabel('login.title')}
            </Typography>
            <Typography color="red" position="absolute" top="100px">
              {message}
            </Typography>

            <Stack
              m={smallScreen ? '10px auto' : '20px auto'}
              width={smallScreen ? '195px' : '250px'}
              spacing={2}
              direction="column"
            >
              <TextField
                id="outlinedBasic"
                label={getFieldLabel('login.email')}
                size="small"
                name="email"
                onInput={handleChange}
              />
              <TextField
                id="outlinedPasswordInput"
                label={getFieldLabel('login.password')}
                name="password"
                autoComplete="current-password"
                size="small"
                onInput={handleChange}
              />
              <Button onClick={handleSubmit} variant="contained">
                Log In
              </Button>
            </Stack>
          </Card>
        </FormControl>
      </Box>
      <Footer />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userLogIn: (user) => dispatch(userLogIn(user)),
});
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
