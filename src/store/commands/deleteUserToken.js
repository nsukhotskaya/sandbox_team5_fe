import { go } from 'connected-react-router';
import { userLogOutSuccess } from '../actions';

const deleteUserToken = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(go('/login'));
  dispatch(userLogOutSuccess());
};
export default deleteUserToken;
