import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
  isAuth: true,
  link: '/',
});
const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
  isAuth: false,
  link: '/login',
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
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
}
export default userPostFetch;
