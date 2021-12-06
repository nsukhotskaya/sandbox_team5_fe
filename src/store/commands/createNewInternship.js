import API from './api';
import {
  postNewInternshipRequest,
  postNewInternshipSuccess,
  postNewInternshipFailure,
} from '../actions';
import fetchInternships from './fetchInternships';

const createNewInternship = (newInternship) => async (dispatch) => {
  dispatch(postNewInternshipRequest());
  try {
    await API.post('/api/Internship/createInternship', newInternship);
    dispatch(postNewInternshipSuccess());
    dispatch(fetchInternships());
  } catch (error) {
    dispatch(postNewInternshipFailure());
  }
};
export default createNewInternship;
