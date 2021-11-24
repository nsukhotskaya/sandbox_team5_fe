export const GET_LANGUAGES = {
  REQUEST: 'GET_LANGUAGES_REQUEST',
  SUCCESS: 'GET_LANGUAGES_SUCCESS',
  FAILURE: 'GET_LANGUAGES_FAILURE',
};

export const getLanguagesRequest = () => ({
  type: GET_LANGUAGES.REQUEST,
  payload: null,
});

export const getLanguagesSuccess = (data) => ({
  type: GET_LANGUAGES.SUCCESS,
  payload: { languages: data },
});

export const getLanguagesFailure = (error) => ({
  type: GET_LANGUAGES.FAILURE,
  payload: { error },
});
