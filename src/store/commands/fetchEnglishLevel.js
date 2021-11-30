import API from './api';
import {
getEnglishLevelRequest,
getEnglishLevelSuccess,
getEnglishLevelFailure,
} from '../actions';

const fetchEnglishLevel = () => async (dispatch) => {
  dispatch(getEnglishLevelRequest());
  try {
    const response = await API.get('api/Enum/getEnglishLevelTypes');
    dispatch(getEnglishLevelSuccess(response.data));
  } catch (error) {
    dispatch(getEnglishLevelFailure());
  }
};

export default fetchEnglishLevel;
