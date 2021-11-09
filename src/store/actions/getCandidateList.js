export const GET_CANDIDATE_LIST = {
  REQUEST: 'GET_CANDIDATE_LIST_REQUEST',
  SUCCESS: 'GET_CANDIDATE_LIST_SUCCESS',
  FAILURE: 'GET_CANDIDATE_LIST_FAILURE',
};

export const getCandidateListRequest = () => ({
  type: GET_CANDIDATE_LIST.REQUEST,
  payload: null,
});

export const getCandidateListSuccess = (data) => ({
  type: GET_CANDIDATE_LIST.SUCCESS,
  payload: { candidates: data },
});

export const getCandidateListFailure = (error) => ({
  type: GET_CANDIDATE_LIST.FAILURE,
  payload: { error },
});
