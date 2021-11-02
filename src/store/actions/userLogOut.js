import { LOGOUT } from '../commands/types';
import { history } from '../store';

const logoutSuccess = {
  type: LOGOUT.SUCCESS,
};

const userLogOut = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(logoutSuccess);
  history.push('/login');
};
export default userLogOut;
