export const GET_CANDIDATE = {
  REQUEST: 'GET_CANDIDATE_REQUEST',
  SUCCESS: 'GET_CANDIDATE_SUCCESS',
  FAILURE: 'GET_CANDIDATE_FAILURE',
};

export const getCandidateRequest = () => ({
  type: GET_CANDIDATE.REQUEST,
  payload: null,
});

export const getCandidateSuccess = (data) => ({
  type: GET_CANDIDATE.SUCCESS,
  payload: { candidate: data },
});

export const getCandidateFailure = (error) => ({
  type: GET_CANDIDATE.FAILURE,
  payload: { error },
});
