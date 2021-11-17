import API from './api';
import {
  getLocationsRequest,
  getLocationsSuccess,
  getLocationsFailure,
} from '../actions';

const fetchLocations = () => async (dispatch) => {
  dispatch(getLocationsRequest());
  try {
    const response = await API.get('api/Location/getLocations');
    dispatch(getLocationsSuccess(response.data));
  } catch (error) {
    dispatch(getLocationsFailure());
  }
};

export default fetchLocations;
