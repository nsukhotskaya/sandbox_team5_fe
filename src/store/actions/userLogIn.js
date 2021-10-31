import axios from 'axios';
import Cookies from 'universal-cookie';
import { logInStarted, logInFailure, logInSuccess } from '../commands';

const cookies = new Cookies();

function userLogIn(user) {
  return (dispatch) => {
    dispatch(logInStarted());
    axios
      .post(`http://exadelteamfive.somee.com/api/authenticate`, user)
      .then((res) => {
        cookies.set('accessToken', res.data.accessToken);
        dispatch(logInSuccess());
        console.log(`Cookie data:`);
        console.log(cookies.getAll());
      })
      .catch(() => {
        dispatch(logInFailure());
      });
  };
}
export default userLogIn;
