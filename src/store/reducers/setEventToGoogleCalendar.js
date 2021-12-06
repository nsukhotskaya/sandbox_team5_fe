import { GET_EVENT_TO_CALENDAR } from '../actions';

const initialState = {
  calendarEvents: [],
  isLoading: false,
};

export default function setEventToCalendar(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_TO_CALENDAR.REQUEST:
      return { ...state, isLoading: true };
    case GET_EVENT_TO_CALENDAR.SUCCESS: {
      const { calendarEvents } = action.payload;
      return { ...state, calendarEvents, isLoading: false };
    }
    case GET_EVENT_TO_CALENDAR.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
