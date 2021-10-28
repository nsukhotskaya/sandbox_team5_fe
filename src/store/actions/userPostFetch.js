import axios from 'axios';
import { setCookie } from 'react-cookie/lib';

const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
  payload: true,
});

function userPostFetch(user) {
  return (dispatch) => {
    axios
      .post(`http://exadelteamfive.somee.com/api/authenticate`, user)
      .then((res) => {
        setCookie('accessToken', res.data.accessToken, {
          secure: true,
          'max-age': 3600,
        });
        dispatch(loginSuccess());
      });
  };
}
export default userPostFetch;
