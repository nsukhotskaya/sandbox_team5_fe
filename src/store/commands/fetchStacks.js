import API from './api';
import {
  getStacksRequest,
  getStacksSuccess,
  getStacksFailure,
} from '../actions';

const fetchStacks = () => async (dispatch) => {
  dispatch(getStacksRequest());
  try {
    const response = await API.get('api/Enum/getStackTypes');
    dispatch(getStacksSuccess(response.data));
  } catch (error) {
    dispatch(getStacksFailure());
  }
};

export default fetchStacks;
