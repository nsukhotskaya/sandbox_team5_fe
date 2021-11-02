import { logInStarted, logInFailure, logInSuccess } from '../commands/types';
import API from '../commands/api';
import { history } from '../store';

const userLogIn = (user) => async (dispatch) => {
  dispatch(logInStarted());
  try {
    const response = await API.post(`api/authenticate`, user);
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    dispatch(logInSuccess());
    history.push('/');
  } catch (error) {
    dispatch(logInFailure());
  }
};
export default userLogIn;
