export const GET_USER_INFO = {
  REQUEST: 'GET_USER_INFO_REQUEST',
  SUCCESS: 'GET_USER_INFO_SUCCESS',
  FAILURE: 'GET_USER_INFO_FAILURE',
};

export const getUserInfoRequest = () => ({
  type: GET_USER_INFO.REQUEST,
  payload: null,
});

export const getUserInfoSuccess = (data) => ({
  type: GET_USER_INFO.SUCCESS,
  payload: { userInfo: data },
});

export const getUserInfoFailure = (error) => ({
  type: GET_USER_INFO.FAILURE,
  payload: { error },
});
