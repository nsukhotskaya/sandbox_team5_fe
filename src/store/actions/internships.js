export const GET_INTERNSHIPS = {
  REQUEST: 'GET_INTERNSHIPS_REQUEST',
  SUCCESS: 'GET_INTERNSHIPS_SUCCESS',
  FAILURE: 'GET_INTERNSHIPS_FAILURE',
};

export const getInternshipsRequest = () => ({
  type: GET_INTERNSHIPS.REQUEST,
  payload: null,
});

export const getInternshipsSuccess = (data) => ({
  type: GET_INTERNSHIPS.SUCCESS,
  payload: { candidates: data },
});

export const getInternshipsFailure = (error) => ({
  type: GET_INTERNSHIPS.FAILURE,
  payload: { error },
});
