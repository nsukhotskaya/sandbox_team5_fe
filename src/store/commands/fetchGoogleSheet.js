import API from './api';
import {
  getGoogleSheetRequest,
  getGoogleSheetSuccess,
  getGoogleSheetFailure,
} from '../actions';
import fetchCandidateList from './fetchCandidateList';

const fetchGoogleSheet = (id) => async (dispatch) => {
  dispatch(getGoogleSheetRequest());
  try {
    const response = await API.get('/api/GoogleSheet');
    dispatch(getGoogleSheetSuccess(response));
    dispatch(
      fetchCandidateList({
        pageSize: 100000,
        pageNumber: 1,
        internshipId: id,
      }),
    );
  } catch (error) {
    dispatch(getGoogleSheetFailure());
  }
};

export default fetchGoogleSheet;
