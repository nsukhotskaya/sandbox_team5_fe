export const GET_ALL_USERS = {
  REQUEST: 'GET_ALL_USERS_REQUEST',
  SUCCESS: 'GET_ALL_USERS_SUCCESS',
  FAILURE: 'GET_ALL_USERS_FAILURE',
};

export const getAllUsersRequest = () => ({
  type: GET_ALL_USERS.REQUEST,
  payload: null,
});

export const getAllUsersSuccess = (data) => ({
  type: GET_ALL_USERS.SUCCESS,
  payload: { allUsers: data },
});

export const getAllUsersFailure = (error) => ({
  type: GET_ALL_USERS.FAILURE,
  payload: { error },
});
