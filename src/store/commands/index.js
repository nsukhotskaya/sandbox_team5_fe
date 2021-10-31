const logInSuccess = () => ({
  type: 'LOGIN_SUCCESS',
  isAuthorized: true,
});
const logInFailure = () => ({
  message: 'You entered incorrect data',
  type: 'LOGIN_FAILURE',
});
const logInStarted = () => ({
  type: 'LOGIN_STARTED',
});
const logOutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
  isAuthorized: false,
});

export { logInSuccess, logInFailure, logInStarted, logOutSuccess };
