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
  const [errorMessages, setErrorMessages] = React.useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if(authorization.error && authorization.error.status === 401){
      setEmailIsValid(false);
      setPasswordIsValid(false);
      setErrorMessages([getFieldLabel('login.error.noSuchUser')])
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
    setErrorMessages([]);
    const errors = [];
    if ( !user.email ) {
      errors.push( getFieldLabel('login.error.emailEmpty') );
      setEmailIsValid(false);
    } else if ( user.email.match(/^\S+@\S+\.\S+$/) === null ) {
      errors.push( getFieldLabel('login.error.emailIncorrect') );
      setEmailIsValid(false);
    }
    if ( !user.password ) {
      errors.push( getFieldLabel('login.error.passwordEmpty') );
      setPasswordIsValid(false);
    } else if ( user.password.match(/^[a-zA-Z0-9]+$/) === null ) {
      errors.push( getFieldLabel('login.error.passwordIncorrect') );
      setPasswordIsValid(false);
    }
    if ( errors.length ) { 
      setErrorMessages(errors);
      return false;
    }
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
    setOpenToaster(true);
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
      {!!errorMessages.length &&
        <Snackbar
          open = {openToaster}
          autoHideDuration = {8000}
          onClose = {handleCloseToaster}
          anchorOrigin = {
            smallScreen ? { vertical: 'top', horizontal: 'center'} : { vertical: 'top', horizontal: 'left' }
          }
        >
          <Box>
            {errorMessages.map((message) => (
              <Box key={message} m="10px">
                <Alert onClose={handleCloseToaster} severity="error">
                  {message}
                </Alert>
              </Box>
            ))}
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
                value={user.email}
                error = {!emailIsValid}
              />
              <TextField
                id="outlinedPasswordInput"
                label={getFieldLabel('login.password')}
                name="password"
                type="password"
                autoComplete="current-password"
                size="small"
                onChange={handleChange}
                value={user.password}
                error = {!passwordIsValid}
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
