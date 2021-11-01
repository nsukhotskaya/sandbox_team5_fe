import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    props.userLogIn({ email, password });
  };

  const handleForm = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const preventDefault = (event) => {
    event.preventDefault();
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
                onChange={handleChange}
                value={email}
              />
              <TextField
                id="outlinedPasswordInput"
                label={getFieldLabel('login.password')}
                name="password"
                autoComplete="current-password"
                size="small"
                onChange={handleChange}
                value={password}
              />
              <Button onClick={handleSubmit} variant="contained">
                {getFieldLabel('login.button.login')}
              </Button>
              <Typography color="red">{message}</Typography>
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
