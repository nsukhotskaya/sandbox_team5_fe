import API from './api';
import {
  getLanguagesRequest,
  getLanguagesSuccess,
  getLanguagesFailure,
} from '../actions';

const fetchLanguages = () => async (dispatch) => {
  dispatch(getLanguagesRequest());
  try {
    const response = await API.get('api/Enum/getLaguageTypes');
    dispatch(getLanguagesSuccess(response.data));
  } catch (error) {
    dispatch(getLanguagesFailure());
  }
};

export default fetchLanguages;
