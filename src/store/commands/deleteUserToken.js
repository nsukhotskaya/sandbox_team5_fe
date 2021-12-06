import { go } from 'connected-react-router';

const deleteUserToken = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch(go('/login'));
};
export default deleteUserToken;
