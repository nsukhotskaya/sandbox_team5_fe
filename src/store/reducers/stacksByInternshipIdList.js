import { GET_STACKS_BY_INTERNSHIP_ID } from '../actions';

const initialState = {
  stacksByInternshipId: [],
  isLoading: false,
};

export default function stacksByInternshipIdList(state = initialState, action) {
  switch (action.type) {
    case GET_STACKS_BY_INTERNSHIP_ID.REQUEST:
      return { ...state, isLoading: true };
    case GET_STACKS_BY_INTERNSHIP_ID.SUCCESS: {
      const { stacksByInternshipId } = action.payload;
      return { ...state, stacksByInternshipId, isLoading: false };
    }
    case GET_STACKS_BY_INTERNSHIP_ID.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
