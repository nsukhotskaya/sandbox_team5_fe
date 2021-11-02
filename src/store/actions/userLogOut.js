import { logOutSuccess } from '../commands/types';
import { history } from '../store';

const userLogOut = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(logOutSuccess());
  history.push('/login');
};
export default userLogOut;
