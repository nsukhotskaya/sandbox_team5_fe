export const UPDATE_INTERNSHIP = {
  REQUEST: 'UPDATE_INTERNSHIP_REQUEST',
  SUCCESS: 'UPDATE_INTERNSHIP_SUCCESS',
  FAILURE: 'UPDATE_INTERNSHIP_FAILURE',
};

export const updateInternshipRequest = () => ({
  type: UPDATE_INTERNSHIP.REQUEST,
  payload: null,
});

export const updateInternshipSuccess = () => ({
  type: UPDATE_INTERNSHIP.SUCCESS,
  payload: null,
});

export const updateInternshipFailure = (error) => ({
  type: UPDATE_INTERNSHIP.FAILURE,
  payload: { error },
});
