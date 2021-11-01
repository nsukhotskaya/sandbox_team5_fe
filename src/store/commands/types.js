const logInSuccess = () => ({
  type: 'LOG_IN_SUCCESS',
  isAuthorized: true,
});
const logInFailure = () => ({
  message: 'You entered incorrect data',
  type: 'LOG_IN_FAILURE',
});
const logInStarted = () => ({
  type: 'LOG_IN_STARTED',
});
const logOutSuccess = () => ({
  type: 'LOG_OUT_SUCCESS',
  isAuthorized: false,
});

export { logInSuccess, logInFailure, logInStarted, logOutSuccess };
