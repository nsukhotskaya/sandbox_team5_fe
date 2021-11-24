import API from './api';
import {
  setBestContactTimeRequest,
  setBestContactTimeSuccess,
  setBestContactTimeFailure,
} from '../actions';

const setBestContactTime = (data) => async (dispatch) => {
  dispatch(setBestContactTimeRequest());
  try {
    const response = await API.post(
      `/api/BestContactTime/setBestContactTime`,
      data,
    );
    dispatch(setBestContactTimeSuccess(response));
  } catch (error) {
    dispatch(setBestContactTimeFailure());
  }
};

export default setBestContactTime;
