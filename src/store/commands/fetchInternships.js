import API from './api';
import {
  getInternshipsRequest,
  getInternshipsSuccess,
  getInternshipsFailure,
} from '../actions';

const requestBody = {
  pageSize: 100,
  pageNumber: 1,
};

const fetchInternships = (filters) => async (dispatch) => {
  dispatch(getInternshipsRequest());
  try {
    const response = await API.post('/api/Internship/getInternships', {
      ...requestBody,
      internshipsFilterBy: filters || {},
    });
    dispatch(getInternshipsSuccess(response.data));
  } catch (error) {
    dispatch(getInternshipsFailure());
  }
};

export default fetchInternships;
