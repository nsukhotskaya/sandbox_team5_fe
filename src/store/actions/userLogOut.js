import Cookies from 'universal-cookie';
import { logOutSuccess } from '../commands';

const cookies = new Cookies();

function userLogOut() {
  return (dispatch) => {
    cookies.remove('accessToken');
    dispatch(logOutSuccess());
    console.log(`Cookie data:`);
    console.log(cookies.getAll());
  };
}
export default userLogOut;
