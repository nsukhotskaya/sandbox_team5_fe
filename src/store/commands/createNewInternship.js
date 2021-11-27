import API from './api';
import {
  postNewInternshipRequest,
  postNewInternshipSuccess,
  postNewInternshipFailure,
} from '../actions';

const createNewInternship = (newInternship) => async (dispatch) => {
  dispatch(postNewInternshipRequest());
  try {
    await API.post('/api/Internship/createInternship', newInternship);
    dispatch(postNewInternshipSuccess());
  } catch (error) {
    dispatch(postNewInternshipFailure());
  }
};
export default createNewInternship;
