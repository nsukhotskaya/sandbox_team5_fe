import API from './api';
import {
  updateInternshipRequest,
  updateInternshipSuccess,
  updateInternshipFailure,
} from '../actions';
import fetchInternshipById from './fetchInternshipById';

const updateInternship = (newInternship) => async (dispatch) => {
  dispatch(updateInternshipRequest());
  try {
    await API.put('/api/Internship/updateInternship', newInternship);
    dispatch(updateInternshipSuccess());
    dispatch(fetchInternshipById(newInternship.id));
  } catch (error) {
    dispatch(updateInternshipFailure());
  }
};
export default updateInternship;
