export const GET_ENGLISH_LEVELS = {
  REQUEST: 'GET_ENGLISH_LEVELS_REQUEST',
  SUCCESS: 'GET_ENGLISH_LEVELS_SUCCESS',
  FAILURE: 'GET_ENGLISH_LEVELS_FAILURE',
};

export const getEnglishLevelsRequest = () => ({
  type: GET_ENGLISH_LEVELS.REQUEST,
  payload: null,
});

export const getEnglishLevelsSuccess = (data) => ({
  type: GET_ENGLISH_LEVELS.SUCCESS,
  payload: { englishLevels: data },
});

export const getEnglishLevelsFailure = (error) => ({
  type: GET_ENGLISH_LEVELS.FAILURE,
  payload: { error },
});
