import { GET_INTERNSHIPS } from '../actions';

const initialState = {
  internships: [],
  isLoading: false,
};

export default function internshipsList(state = initialState, action) {
  switch (action.type) {
    case GET_INTERNSHIPS.REQUEST:
      return { ...state, isLoading: true };
    case GET_INTERNSHIPS.SUCCESS: {
      const { internships } = action.payload;
      return { ...state, internships, isLoading: false };
    }
    case GET_INTERNSHIPS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
