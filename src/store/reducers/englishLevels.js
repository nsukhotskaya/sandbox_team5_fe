import { GET_ENGLISH_LEVELS } from '../actions';

const initialState = {
  englishLevels: [],
  isLoading: false,
};

export default function englishLevels(state = initialState, action) {
  switch (action.type) {
    case GET_ENGLISH_LEVELS.REQUEST:
      return { ...state, isLoading: true };
    case GET_ENGLISH_LEVELS.SUCCESS:
      return {
        ...state,
        englishLevels: action.payload.englishLevels,
        isLoading: false,
      };
    case GET_ENGLISH_LEVELS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
