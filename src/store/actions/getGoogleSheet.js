export const GET_GOOGLE_SHEET = {
  REQUEST: 'GET_GOOGLE_SHEET_REQUEST',
  SUCCESS: 'GET_GOOGLE_SHEET_SUCCESS',
  FAILURE: 'GET_EGOOGLE_SHEET_FAILURE',
};

export const getGoogleSheetRequest = () => ({
  type: GET_GOOGLE_SHEET.REQUEST,
  payload: null,
});

export const getGoogleSheetSuccess = () => ({
  type: GET_GOOGLE_SHEET.SUCCESS,
  payload: null,
});

export const getGoogleSheetFailure = (error) => ({
  type: GET_GOOGLE_SHEET.FAILURE,
  payload: { error },
});
