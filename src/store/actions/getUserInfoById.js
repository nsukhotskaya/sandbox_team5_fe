export const GET_USER_INFO_BY_ID = {
  REQUEST: 'GET_USER_INFO_BY_ID_REQUEST',
  SUCCESS: 'GET_USER_INFO_BY_ID_SUCCESS',
  FAILURE: 'GET_USER_INFO_BY_ID_FAILURE',
};

export const getUserInfoByIdRequest = () => ({
  type: GET_USER_INFO_BY_ID.REQUEST,
  payload: null,
});

export const getUserInfoByIdSuccess = (data) => ({
  type: GET_USER_INFO_BY_ID.SUCCESS,
  payload: { user: data },
});

export const getUserInfoByIdFailure = (error) => ({
  type: GET_USER_INFO_BY_ID.FAILURE,
  payload: { error },
});
