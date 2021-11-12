import { GET_INTERNSHIP_BY_ID } from '../actions';

const initialState = {
  internship: [],
  isLoading: false,
};

export default function internshipById(state = initialState, action) {
  switch (action.type) {
    case GET_INTERNSHIP_BY_ID.REQUEST:
      return { ...state, isLoading: true };
    case GET_INTERNSHIP_BY_ID.SUCCESS: {
      const { internship } = action.payload;
      return { ...state, internship, isLoading: false };
    }
    case GET_INTERNSHIP_BY_ID.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
