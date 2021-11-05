import { GET_INTERNSHIPS } from '../commands/types';

const initialState = {
  internships: [],
  isLoading: false,
};

export default function internshipsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INTERNSHIPS.REQUEST:
      return { ...state, isLoading: true };
    case GET_INTERNSHIPS.SUCCESS:
      return { ...state, internships: action.payload, isLoading: false };
    case GET_INTERNSHIPS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
