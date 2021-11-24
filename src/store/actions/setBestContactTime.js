export const SET_BEST_CONTACT_TIME = {
  REQUEST: 'SET_BEST_CONTACT_TIME_REQUEST',
  SUCCESS: 'SET_BEST_CONTACT_TIME_SUCCESS',
  FAILURE: 'SET_BEST_CONTACT_TIME_FAILURE',
};

export const setBestContactTimeRequest = () => ({
  type: SET_BEST_CONTACT_TIME.REQUEST,
  payload: null,
});

export const setBestContactTimeSuccess = () => ({
  type: SET_BEST_CONTACT_TIME.SUCCESS,
  payload: null,
});

export const setBestContactTimeFailure = (error) => ({
  type: SET_BEST_CONTACT_TIME.FAILURE,
  payload: { error },
});
