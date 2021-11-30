import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Button, TextField, Stack, Box, FormControl } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { fetchUserToken } from '../../store/commands';
import './Login.sass';
import { Footer } from '../../components';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';

const Login = () => {
  const smallScreen = useMediaDown('sm');
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.authorization);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [openToaster, setOpenToaster] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(' ');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if(authorization.error && authorization.error.status === 401){
      setEmailIsValid(false);
      setEmailErrorMessage(' ')
      setErrorMessage([getFieldLabel('login.error.noSuchUser')])
    }
  }, [authorization]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const userObj = { ...user };
    userObj[name] = value;
    setUser(userObj);
  };

  const validate = () => {
    setEmailIsValid(true);
    setPasswordIsValid(true);
    setEmailErrorMessage(' ');
    setErrorMessage('');
    if ( !user.email ) {
      setEmailErrorMessage(getFieldLabel('login.error.emailEmpty'));
      setEmailIsValid(false);
    } else if ( user.email.match(/^\S+@\S+\.\S+$/) === null ) {
      setEmailErrorMessage(getFieldLabel('login.error.emailIncorrect'));
      setEmailIsValid(false);
      if ( !user.password ) {
        setPasswordIsValid(false);
        return false;
      } 
      return false;
    }
    if ( !user.password ) {
      setPasswordIsValid(false);
      return false;
    } 
    // if ( errors.length ) { 
    //   setErrorMessage(errors);
    //   return false;
    // }
    return true;
  }
  
  const handleCloseToaster = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToaster(false);
  };

  const handleSubmit = () => {
    const isValid = validate();
    setOpenToaster(true)
    if ( isValid ) {
        dispatch(fetchUserToken(user))
    }
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
      {(errorMessage !== '') &&
        <Snackbar
          open = {openToaster}
          autoHideDuration = {8000}
          onClose = {handleCloseToaster}
          anchorOrigin = {
            smallScreen ? { vertical: 'top', horizontal: 'center'} : { vertical: 'top', horizontal: 'left' }
          }
        >
          <Box m="10px">
            <Alert onClose={handleCloseToaster} severity="error">
              {errorMessage}
            </Alert>
          </Box>
        </Snackbar>
      }
      <Box className="loginCardWrapper">
        <FormControl onKeyPress={handleForm} onSubmit={preventDefault}>
          <Card
            variant="outlined"
            className={smallScreen ? 'loginCardMobile' : 'loginCard'}
          >
            <Typography
              m={smallScreen ? '10px' : '25px'}
              variant="h5"
              color="#1976d2"
              textAlign="center"
            >
              {getFieldLabel('login.title')}
            </Typography>
            <Stack
              m={smallScreen ? '10px auto' : '20px auto'}
              width={smallScreen ? '195px' : '250px'}
              spacing={1}
              direction="column"
            >
              <TextField
                label={getFieldLabel('login.email')}
                size="small"
                name="email"
                onChange={handleChange}
                value={user.email}
                error = {!emailIsValid}
                helperText = {!emailIsValid ? emailErrorMessage : ' '}
              />
              <TextField
                label={getFieldLabel('login.password')}
                name="password"
                type="password"
                autoComplete="current-password"
                size="small"
                onChange={handleChange}
                value={user.password}
                error = {!passwordIsValid || !emailIsValid }
                helperText = {!passwordIsValid? getFieldLabel('login.error.passwordEmpty') : ' '}
              />
              <Button onClick={handleSubmit} variant="contained">
                {getFieldLabel('login.button.login')}
              </Button>
            </Stack>
          </Card>
        </FormControl>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
