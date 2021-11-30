import API from './api';
import {
  getStacksByInternshipIdRequest,
  getStacksByInternshipIdSuccess,
  getStacksByInternshipIdFailure,
} from '../actions';

const fetchStacksByInternshipId = (id) => async (dispatch) => {
  dispatch(getStacksByInternshipIdRequest());
  try {
    const response = await API.get(
      `/getInternshipStacksByInternshipId?internshipId=${id}`,
    );
    dispatch(getStacksByInternshipIdSuccess(response.data));
  } catch (error) {
    dispatch(getStacksByInternshipIdFailure());
  }
};

export default fetchStacksByInternshipId;
