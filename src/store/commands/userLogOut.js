import { push } from 'connected-react-router';
import { logoutSuccess } from '../actions';

const userLogOut = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(logoutSuccess);
  dispatch(push('/login'));
};
export default userLogOut;
