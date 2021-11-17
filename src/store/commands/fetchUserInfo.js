import API from './api';
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} from '../actions';

const fetchUserInfo = () => async (dispatch) => {
  dispatch(getUserInfoRequest());
  try {
    const response = await API.get('api/User/getUserInfo');
    dispatch(getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(getUserInfoFailure());
  }
};

export default fetchUserInfo;
