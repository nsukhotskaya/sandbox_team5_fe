export const POST_CANDIDATES_BY_USER = {
  REQUEST: 'POST_CANDIDATES_BY_USER_REQUEST',
  SUCCESS: 'POST_CANDIDATES_BY_USER_SUCCESS',
  FAILURE: 'POST_CANDIDATES_BY_USER_FAILURE',
};

export const postCandidatesByUserRequest = () => ({
  type: POST_CANDIDATES_BY_USER.REQUEST,
  payload: null,
});

export const postCandidatesByUserSuccess = (data) => ({
  type: POST_CANDIDATES_BY_USER.SUCCESS,
  payload: { assignUserCandidates: data },
});

export const postCandidatesByUserFailure = (error) => ({
  type: POST_CANDIDATES_BY_USER.FAILURE,
  payload: { error },
});
