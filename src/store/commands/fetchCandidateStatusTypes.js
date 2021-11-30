import API from './api';
import {
  getCandidateStatusTypesRequest,
  getCandidateStatusTypesSuccess,
  getCandidateStatusTypesFailure,
} from '../actions';

const fetchCandidateStatusTypes = () => async (dispatch) => {
  dispatch(getCandidateStatusTypesRequest());
  try {
    const response = await API.get('api/Enum/getCandidateStatusTypes');
    dispatch(getCandidateStatusTypesSuccess(response.data));
  } catch (error) {
    dispatch(getCandidateStatusTypesFailure());
  }
};

export default fetchCandidateStatusTypes;
