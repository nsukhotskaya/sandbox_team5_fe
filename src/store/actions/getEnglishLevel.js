export const GET_ENGLISH_LEVEL = {
    REQUEST: 'GET_ENGLISH_LEVEL_REQUEST',
    SUCCESS: 'GET_ENGLISH_LEVEL_SUCCESS',
    FAILURE: 'GET_ENGLISH_LEVEL_FAILURE',
  };
  
  export const getEnglishLevelRequest = () => ({
    type: GET_ENGLISH_LEVEL.REQUEST,
    payload: null,
  });
  
  export const getEnglishLevelSuccess = (data) => ({
    type: GET_ENGLISH_LEVEL.SUCCESS,
    payload: { englishLevels: data },
  });
  
  export const getEnglishLevelFailure = (error) => ({
    type: GET_ENGLISH_LEVEL.FAILURE,
    payload: { error },
  });