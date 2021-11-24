export const GET_STACKS = {
  REQUEST: 'GET_STACKS_REQUEST',
  SUCCESS: 'GET_STACKS_SUCCESS',
  FAILURE: 'GET_STACKS_FAILURE',
};

export const getStacksRequest = () => ({
  type: GET_STACKS.REQUEST,
  payload: null,
});

export const getStacksSuccess = (data) => ({
  type: GET_STACKS.SUCCESS,
  payload: { stacks: data },
});

export const getStacksFailure = (error) => ({
  type: GET_STACKS.FAILURE,
  payload: { error },
});
