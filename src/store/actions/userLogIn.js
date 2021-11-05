import { push } from 'connected-react-router';
import { LOGIN } from '../commands/types';
import API from '../commands/api';

const loginRequest = {
  type: LOGIN.REQUEST,
};
const loginSuccess = {
  type: LOGIN.SUCCESS,
};
const loginFailure = {
  type: LOGIN.FAILURE,
};

const userLogIn = (user) => async (dispatch) => {
  dispatch(loginRequest);
  try {
    const response = await API.post('api/authenticate', user);
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    dispatch(loginSuccess);
    dispatch(push('/profile'));
  } catch (error) {
    dispatch({ type: loginFailure });
  }
};
export default userLogIn;
