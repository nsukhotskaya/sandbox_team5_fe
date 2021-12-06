export const GET_CONTACT_TIME = {
  REQUEST: 'GET_CONTACT_TIME_REQUEST',
  SUCCESS: 'GET_CONTACT_TIME_SUCCESS',
  FAILURE: 'GET_CONTACT_TIME_FAILURE',
};

export const getContactTimeRequest = () => ({
  type: GET_CONTACT_TIME.REQUEST,
  payload: null,
});

export const getContactTimeSuccess = (data) => ({
  type: GET_CONTACT_TIME.SUCCESS,
  payload: { contactTime: data },
});

export const getContactTimeFailure = (error) => ({
  type: GET_CONTACT_TIME.FAILURE,
  payload: { error },
});
