export const UPDATE_CANDIDATE_INFO = {
    REQUEST: 'UPDATE_CANDIDATE_INFO_REQUEST',
    SUCCESS: 'UPDATE_CANDIDATE_INFO_SUCCESS',
    FAILURE: 'UPDATE_CANDIDATE_INFO_FAILURE',
  };
  
  export const updateCandidateInfoRequest = () => ({
    type: UPDATE_CANDIDATE_INFO.REQUEST,
    payload: null,
  });
  
  export const updateCandidateInfoSuccess = (candidateInfo) => ({
    type: UPDATE_CANDIDATE_INFO.SUCCESS,
    candidateInfo,
  });
  
  export const updateCandidateInfoFailure = (error) => ({
    type: UPDATE_CANDIDATE_INFO.FAILURE,
    payload: { error },
  });
  