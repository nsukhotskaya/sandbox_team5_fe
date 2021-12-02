import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Button, TextField, Stack, FormControl, Box } from '@mui/material';
import { fetchUserToken } from '../../store/commands';
import './Login.sass';
import { Footer, ToasterAlert } from '../../components';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';
import useToaster from '../../components/toasterAlert/useToaster'

const Login = () => {
  const smallScreen = useMediaDown('sm');
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.authorization);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(' ');

  const { isToasterOpen, handleCloseToaster, alertMessages, addToast } = useToaster();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if(authorization.error && authorization.error.status === 401){
      setEmailIsValid(false);
      setEmailErrorMessage(' ');
      addToast(getFieldLabel('login.error.noSuchUser'))
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
    handleCloseToaster()
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
    return true;
  }

  const handleSubmit = () => {
    const isValid = validate();
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
      {!!alertMessages.length && alertMessages.map((message)=>(
        <ToasterAlert key = {message} isToasterOpen={isToasterOpen} handleCloseToaster={handleCloseToaster} message={message}/>
      ))
      }
      <Box className="loginCardWrapper">
        <FormControl onKeyPress={handleForm} onSubmit={preventDefault}>
          <Card
            variant="outlined"
            className={smallScreen ? 'loginCardMobile' : 'loginCard'}
          >
            <Typography
              m={smallScreen ? '18px' : '25px'}
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
