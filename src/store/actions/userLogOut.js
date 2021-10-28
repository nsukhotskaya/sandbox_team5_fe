import Cookies from 'universal-cookie';

const cookies = new Cookies();

const logOutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
  isAuth: false,
});

function userLogOut() {
  return (dispatch) => {
    cookies.remove('accessToken');
    dispatch(logOutSuccess());
  };
}
export default userLogOut;
