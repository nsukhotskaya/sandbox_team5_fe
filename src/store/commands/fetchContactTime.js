import API from './api';
import {
  getContactTimeRequest,
  getContactTimeSuccess,
  getContactTimeFailure,
} from '../actions';

const fetchContactTime = (id) => async (dispatch) => {
  dispatch(getContactTimeRequest());
  try {
    const response = await API.get(`/api/BestContactTime/${id}`);
    dispatch(getContactTimeSuccess(response.data));
  } catch (error) {
    dispatch(getContactTimeFailure());
  }
};

export default fetchContactTime;
