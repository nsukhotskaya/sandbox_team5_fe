import { push } from 'connected-react-router';
import API from './api';
import { userLogOutSuccess } from '../actions';
const deleteUserToken = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(userLogOutSuccess());
  dispatch(push('/login'));
};
export default deleteUserToken;
