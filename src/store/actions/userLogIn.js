import Cookies from 'universal-cookie';
import { logInStarted, logInFailure, logInSuccess } from '../commands/types';
import API from '../commands/api';
import { history } from '../store';

const cookies = new Cookies();

const userLogIn = (user) => async (dispatch) => {
  dispatch(logInStarted());
  try {
    const response = await API.post(`api/authenticate`, user);
    const token = response.data.accessToken;
    cookies.set('accessToken', token);
    dispatch(logInSuccess());
    dispatch(history.push('/'));
  } catch (error) {
    dispatch(logInFailure());
  }
};
export default userLogIn;
