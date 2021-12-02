export const USER_LOGIN = {
  REQUEST: 'USER_LOGIN_REQUEST',
  SUCCESS: 'USER_LOGIN_SUCCESS',
  FAILURE: 'USER_LOGIN_FAILURE',
};

export const userLogInRequest = () => ({
  type: USER_LOGIN.REQUEST,
  payload: null,
});

export const userLogInSuccess = () => ({
  type: USER_LOGIN.SUCCESS,
  payload: null,
});

export const userLogInFailure = (error) => ({
  type: USER_LOGIN.FAILURE,
  payload: error,
});
