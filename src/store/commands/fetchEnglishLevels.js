import API from './api';
import {
  getEnglishLevelsRequest,
  getEnglishLevelsSuccess,
  getEnglishLevelsFailure,
} from '../actions';

const fetchEnglishLevels = () => async (dispatch) => {
  dispatch(getEnglishLevelsRequest());
  try {
    const response = await API.get('api/Enum/getEnglishLevelTypes');
    dispatch(getEnglishLevelsSuccess(response.data));
  } catch (error) {
    dispatch(getEnglishLevelsFailure());
  }
};

export default fetchEnglishLevels;
