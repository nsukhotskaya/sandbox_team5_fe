import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
  isAuth: true,
});
const loginFailure = () => ({
  message: 'You entered incorrect data',
  type: 'LOGIN_FAILURE',
});
const loginStarted = () => ({
  type: 'LOGIN_STARTED',
});

function userPostFetch(user) {
  return (dispatch) => {
    dispatch(loginStarted());
    axios
      .post(`http://exadelteamfive.somee.com/api/authenticate`, user)
      .then((res) => {
        cookies.set('accessToken', res.data.accessToken);
        dispatch(loginSuccess());
        console.log(`Cookie data:`);
        console.log(cookies.getAll());
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
}
export default userPostFetch;
