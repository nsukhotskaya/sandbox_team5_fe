import API from './api';
import {
  setEventToCalendarRequest,
  setEventToCalendarSuccess,
  setEventToCalendarFailure,
} from '../actions';

const setEventToCalendar = (data) => async (dispatch) => {
  dispatch(setEventToCalendarRequest());
  try {
    await API.post(`/api/GoogleCalendar/setEventToGoogleCalendar`, data);

    dispatch(setEventToCalendarSuccess());
  } catch (error) {
    dispatch(setEventToCalendarFailure());
  }
};

export default setEventToCalendar;
