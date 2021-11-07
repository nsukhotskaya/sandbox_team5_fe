import { LOGIN, LOGOUT } from './types';

export const loginRequest = {
  type: LOGIN.REQUEST,
};
export const loginSuccess = {
  type: LOGIN.SUCCESS,
  isAuthorized: true,
};
export const loginFailure = {
  type: LOGIN.FAILURE,
};
export const logoutSuccess = {
  type: LOGOUT.SUCCESS,
  isAuthorized: false,
};
