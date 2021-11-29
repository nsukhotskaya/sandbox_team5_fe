export const POST_NEW_INTERNSHIP = {
  REQUEST: 'POST_NEW_INTERNSHIP_REQUEST',
  SUCCESS: 'POST_NEW_INTERNSHIP_SUCCESS',
  FAILURE: 'POST_NEW_INTERNSHIP_FAILURE',
};

export const postNewInternshipRequest = () => ({
  type: POST_NEW_INTERNSHIP.REQUEST,
  payload: null,
});

export const postNewInternshipSuccess = () => ({
  type: POST_NEW_INTERNSHIP.SUCCESS,
  payload: null,
});

export const postNewInternshipFailure = (error) => ({
  type: POST_NEW_INTERNSHIP.FAILURE,
  payload: { error },
});
