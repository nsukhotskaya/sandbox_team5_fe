export const GET_STACKS_BY_INTERNSHIP_ID = {
  REQUEST: 'GET_STACKS_BY_INTERNSHIP_ID_REQUEST',
  SUCCESS: 'GET_STACKS_BY_INTERNSHIP_ID_SUCCESS',
  FAILURE: 'GET_STACKS_BY_INTERNSHIP_ID_FAILURE',
};

export const getStacksByInternshipIdRequest = () => ({
  type: GET_STACKS_BY_INTERNSHIP_ID.REQUEST,
  payload: null,
});

export const getStacksByInternshipIdSuccess = (data) => ({
  type: GET_STACKS_BY_INTERNSHIP_ID.SUCCESS,
  payload: { stacksByInternshipId: data },
});

export const getStacksByInternshipIdFailure = (error) => ({
  type: GET_STACKS_BY_INTERNSHIP_ID.FAILURE,
  payload: { error },
});
