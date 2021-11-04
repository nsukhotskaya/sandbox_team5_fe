import { push } from 'connected-react-router';
import { LOGOUT } from '../commands/types';

const logoutSuccess = {
  type: LOGOUT.SUCCESS,
};

const userLogOut = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(logoutSuccess);
  dispatch(push('/login'));
};
export default userLogOut;
