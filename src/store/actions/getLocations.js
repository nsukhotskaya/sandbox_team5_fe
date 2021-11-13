export const GET_LOCATIONS = {
  REQUEST: 'GET_LOCATIONS_REQUEST',
  SUCCESS: 'GET_LOCATIONS_SUCCESS',
  FAILURE: 'GET_LOCATIONS_FAILURE',
};

export const getLocationsRequest = () => ({
  type: GET_LOCATIONS.REQUEST,
  payload: null,
});

export const getLocationsSuccess = (data) => ({
  type: GET_LOCATIONS.SUCCESS,
  payload: { locations: data },
});

export const getLocationsFailure = (error) => ({
  type: GET_LOCATIONS.FAILURE,
  payload: { error },
});
