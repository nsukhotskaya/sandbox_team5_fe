// import { push } from 'connected-react-router';
import API from '../commands/api';
import { GETCANDIDATELIST } from '../commands/types';

const getCandidateLisRequest = () => ({
  type: GETCANDIDATELIST.REQUEST,
});

const getCandidateListSuccess = (candidateList) => ({
  type: GETCANDIDATELIST.SUCCESS,
  candidateList,
});

const getCandidateListFailure = () => ({
  type: GETCANDIDATELIST.FAILURE,
});

const getCandidateList = () => async (dispatch) => {
  dispatch(getCandidateLisRequest());
  try {
    const response = await API.post(
      `api/Candidate/getCandidateListByInternshipId`,
      {
        pageSize: 1,
        pageNumber: 1,
        internshipId: 1,
      },
    );
    const candidateData = response.data;
    dispatch(getCandidateListSuccess(candidateData));
    console.log(candidateData);
    // dispatch(push('/candidates'));
  } catch (error) {
    dispatch(getCandidateListFailure());
  }
};

export default getCandidateList;
