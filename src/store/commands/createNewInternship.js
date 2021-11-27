import API from './api';
import {
  postNewInternshipRequest,
  postNewInternshipSuccess,
  postNewInternshipFailure,
} from '../actions';

const createNewInternship = (newInternship) => async (dispatch) => {
  dispatch(postNewInternshipRequest());
  try {
    console.log(JSON.stringify(newInternship));
    const response = await API.post('/api/Internship/createInternship', newInternship);
    console.log(response)
    dispatch(postNewInternshipSuccess());
  } catch (error) {
    console.log(error);
    dispatch(postNewInternshipFailure());
  }
};
export default createNewInternship;
