export const UPDATE_CANDIDATE_STATUS = {
  REQUEST: 'UPDATE_CANDIDATE_STATUS_REQUEST',
  SUCCESS: 'UPDATE_CANDIDATE_STATUS_SUCCESS',
  FAILURE: 'UPDATE_CANDIDATE_STATUS_FAILURE',
};

export const updateCandidateStatusRequest = () => ({
  type: UPDATE_CANDIDATE_STATUS.REQUEST,
  payload: null,
});

export const updateCandidateStatusSuccess = (statusType, candidateId) => ({
  type: UPDATE_CANDIDATE_STATUS.SUCCESS,
  statusType,
  candidateId,
});

export const updateCandidateStatusFailure = (error) => ({
  type: UPDATE_CANDIDATE_STATUS.FAILURE,
  payload: { error },
});
