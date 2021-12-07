import API from './api';
import {
  getUserInfoByIdRequest,
  getUserInfoByIdSuccess,
  getUserInfoByIdFailure,
} from '../actions';

const fetchUserInfoById = (id) => async (dispatch) => {
  dispatch(getUserInfoByIdRequest());
  try {
    const response = await API.get(`api/User/getUserInfoById?id=${id}`);
    dispatch(getUserInfoByIdSuccess(response.data));
  } catch (error) {
    dispatch(getUserInfoByIdFailure());
  }
};

export default fetchUserInfoById;
