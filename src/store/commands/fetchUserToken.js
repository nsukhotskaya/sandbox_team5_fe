import { push } from 'connected-react-router';
import API from './api';
import {
  userLogInRequest,
  userLogInSuccess,
  userLogInFailure,
} from '../actions';

const fetchUserToken = (user) => async (dispatch) => {
  dispatch(userLogInRequest());
  try {
    const response = await API.post('api/authenticate', user);
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    dispatch(userLogInSuccess());
    dispatch(push('/profile'));
  } catch (error) {
    dispatch(userLogInFailure());
  }
};
export default fetchUserToken;
