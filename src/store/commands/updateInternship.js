import API from './api';
import {
  updateInternshipRequest,
  updateInternshipSuccess,
  updateInternshipFailure,
} from '../actions';

const updateInternship = (newInternship) => async (dispatch) => {
  dispatch(updateInternshipRequest());
  try {
    await API.put('/api/Internship/updateInternship', newInternship);
    dispatch(updateInternshipSuccess());
  } catch (error) {
    dispatch(updateInternshipFailure());
  }
};
export default updateInternship;
