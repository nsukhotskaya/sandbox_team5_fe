import { GET_CONTACT_TIME } from '../actions';

const initialState = {
  contactTime: [],
  isLoading: false,
};

export default function bestContactTime(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACT_TIME.REQUEST:
      return { ...state, isLoading: true };
    case GET_CONTACT_TIME.SUCCESS: {
      const { contactTime } = action.payload;
      return {
        ...state,
        contactTime,
        isLoading: false,
      };
    }
    case GET_CONTACT_TIME.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
