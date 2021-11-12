export const GET_INTERNSHIP_BY_ID = {
  REQUEST: 'GET_INTERNSHIP_BY_ID_REQUEST',
  SUCCESS: 'GET_INTERNSHIP_BY_ID_SUCCESS',
  FAILURE: 'GET_INTERNSHIP_BY_ID_FAILURE',
};

export const getInternshipByIdRequest = () => ({
  type: GET_INTERNSHIP_BY_ID.REQUEST,
  payload: null,
});

export const getInternshipByIdSuccess = (data) => ({
  type: GET_INTERNSHIP_BY_ID.SUCCESS,
  payload: { internship: data },
});

export const getInternshipByIdFailure = (error) => ({
  type: GET_INTERNSHIP_BY_ID.FAILURE,
  payload: { error },
});
