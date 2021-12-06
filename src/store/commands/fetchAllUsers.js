import API from './api';
import {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFailure,
} from '../actions';

const fetchAllUsers = () => async (dispatch) => {
  dispatch(getAllUsersRequest());
  try {
    const response = await API.get('/api/User/getAllUsers');
    dispatch(getAllUsersSuccess(response.data));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export default fetchAllUsers;
