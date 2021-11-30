export const GET_CANDIDATE_STATUS_TYPE = {
    REQUEST: 'GET_CANDIDATE_STATUS_TYPE_REQUEST',
    SUCCESS: 'GET_CANDIDATE_STATUS_TYPE_SUCCESS',
    FAILURE: 'GET_CANDIDATE_STATUS_TYPE_FAILURE',
  };
  
  export const getCandidateStatusTypesRequest = () => ({
    type: GET_CANDIDATE_STATUS_TYPE.REQUEST,
    payload: null,
  });
  
  export const getCandidateStatusTypesSuccess = (data) => ({
    type: GET_CANDIDATE_STATUS_TYPE.SUCCESS,
    payload: { candidateStatusTypes: data },
  });
  
  export const getCandidateStatusTypesFailure = (error) => ({
    type: GET_CANDIDATE_STATUS_TYPE.FAILURE,
    payload: { error },
  });
