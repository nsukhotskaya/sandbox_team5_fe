import { LOGIN } from '../commands/types';
import API from '../commands/api';
import { history } from '../store';

const userLogIn = (user) => async (dispatch) => {
  dispatch({ type: LOGIN.REQUEST });
  try {
    const response = await API.post(`api/authenticate`, user);
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);
    dispatch({ type: LOGIN.SUCCESS });
    history.push('/');
  } catch (error) {
    dispatch({ type: LOGIN.FAILURE });
  }
};
export default userLogIn;
