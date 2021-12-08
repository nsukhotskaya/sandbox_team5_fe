import { GET_STACKS_SKILLS } from '../actions';

const initialState = {
  stacksSkills: [],
  isLoading: false,
};

export default function stacksSkills(state = initialState, action) {
  switch (action.type) {
    case GET_STACKS_SKILLS.REQUEST:
      return { ...state, isLoading: true };
    case GET_STACKS_SKILLS.SUCCESS: {
      return {
        ...state,
        stacksSkills: action.payload.stacksSkills,
        isLoading: false,
      };
    }
    case GET_STACKS_SKILLS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
