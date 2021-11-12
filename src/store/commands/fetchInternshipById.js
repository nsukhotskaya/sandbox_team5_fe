import API from './api';
import {
  getInternshipByIdRequest,
  getInternshipByIdSuccess,
  getInternshipByIdFailure,
} from '../actions';

const fetchInternshipById = (id) => async (dispatch) => {
  dispatch(getInternshipByIdRequest());
  try {
    const response = await API.get(`api/Internship/getInternshipById?id=${id}`);
    dispatch(getInternshipByIdSuccess(response.data));
  } catch (error) {
    dispatch(getInternshipByIdFailure());
  }
};

export default fetchInternshipById;
