export const GET_EVENT_TO_CALENDAR = {
    REQUEST: 'GET_EVENT_TO_CALENDAR_REQUEST',
    SUCCESS: 'GET_EVENT_TO_CALENDAR_SUCCESS',
    FAILURE: 'GET_EVENT_TO_CALENDAR_FAILURE',
  };
  
  export const setEventToCalendarRequest = () => ({
    type: GET_EVENT_TO_CALENDAR.REQUEST,
    payload: null,
  });
  
  export const setEventToCalendarSuccess = (data) => ({
    type: GET_EVENT_TO_CALENDAR.SUCCESS,
    payload: { calendarEvents: data },
  });
  
  export const setEventToCalendarFailure = (error) => ({
    type: GET_EVENT_TO_CALENDAR.FAILURE,
    payload: { error },
  });
  