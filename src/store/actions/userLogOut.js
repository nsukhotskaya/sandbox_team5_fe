import Cookies from 'universal-cookie';
import { logOutSuccess } from '../commands/types';

const cookies = new Cookies();

const userLogOut = () => (dispatch) => {
  cookies.remove('accessToken');
  dispatch(logOutSuccess());
};
export default userLogOut;
