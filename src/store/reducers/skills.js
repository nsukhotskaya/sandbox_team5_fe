import { GET_SKILLS } from '../actions';

const initialState = {
  skills: [],
  isLoading: false,
};

export default function skills(state = initialState, action) {
  switch (action.type) {
    case GET_SKILLS.REQUEST:
      return { ...state, isLoading: true };
    case GET_SKILLS.SUCCESS: {
      return { ...state, skills: action.payload.skills, isLoading: false };
    }
    case GET_SKILLS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
