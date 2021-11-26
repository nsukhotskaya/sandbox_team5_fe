export const GET_CANDIDATE_STATUS_TYPES = {
  REQUEST: 'GET_CANDIDATE_STATUS_REQUEST',
  SUCCESS: 'GET_CANDIDATE_STATUS_SUCCESS',
  FAILURE: 'GET_CANDIDATE_STATUS_FAILURE',
};

export const getCandidateStatusTypesRequest = () => ({
  type: GET_CANDIDATE_STATUS_TYPES.REQUEST,
  payload: null,
});

export const getCandidateStatusTypesSuccess = (data) => ({
  type: GET_CANDIDATE_STATUS_TYPES.SUCCESS,
  payload: { candidateStatusTypes: data },
});

export const getCandidateStatusTypesFailure = (error) => ({
  type: GET_CANDIDATE_STATUS_TYPES.FAILURE,
  payload: { error },
});
