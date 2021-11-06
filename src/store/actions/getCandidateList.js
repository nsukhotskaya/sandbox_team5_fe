// import { push } from 'connected-react-router';
import API from '../commands/api';
import { GETCANDIDATELIST } from '../commands/types';

const getCandidateListRequest = () => ({
  type: GETCANDIDATELIST.REQUEST,
});

const getCandidateListSuccess = (data) => ({
  type: GETCANDIDATELIST.SUCCESS,
  payload: data,
});

const getCandidateListFailure = () => ({
  type: GETCANDIDATELIST.FAILURE,
});

const getCandidateList = () => async (dispatch) => {
  dispatch(getCandidateListRequest());
  try {
    const response = await API.post(
      '/api/Candidate/getCandidateListByInternshipId',
      {
        pageSize: 10,
        pageNumber: 1,
        internshipId: 1,
      },
    );
    dispatch(getCandidateListSuccess(response.data));
    // dispatch(push('/candidates'));
  } catch (error) {
    dispatch(getCandidateListFailure());
  }
};

export default getCandidateList;
