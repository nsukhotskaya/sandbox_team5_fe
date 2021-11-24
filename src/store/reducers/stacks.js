import { GET_STACKS } from '../actions';

const initialState = {
  stacks: [],
  isLoading: false,
};

export default function stacks(state = initialState, action) {
  switch (action.type) {
    case GET_STACKS.REQUEST:
      return { ...state, isLoading: true };
    case GET_STACKS.SUCCESS: {
      return { ...state, stacks: action.payload.stacks, isLoading: false };
    }
    case GET_STACKS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
