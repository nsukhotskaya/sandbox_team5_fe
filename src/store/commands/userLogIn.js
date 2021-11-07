import { push } from 'connected-react-router';
import { loginRequest, loginSuccess, loginFailure } from '../actions';
import { authorizationPostRequest } from './api';

const userLogIn = (user) => async (dispatch) => {
  dispatch(loginRequest);
  try {
    const response = await authorizationPostRequest(user);
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    dispatch(loginSuccess);
    dispatch(push('/profile'));
  } catch (error) {
    dispatch(loginFailure);
  }
};
export default userLogIn;
