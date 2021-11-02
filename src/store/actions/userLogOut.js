import { LOGOUT } from '../commands/types';
import { history } from '../store';

const userLogOut = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch({ type: LOGOUT.SUCCESS });
  history.push('/login');
};
export default userLogOut;
