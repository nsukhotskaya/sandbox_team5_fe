import { GET_ENGLISH_LEVELS } from '../actions';

const initialState = {
  englishLevelType: [],
  isLoading: false,
};

export default function englishLevelType(state = initialState, action) {
  switch (action.type) {
    case GET_ENGLISH_LEVELS.REQUEST:
      return { ...state, isLoading: true };
    case GET_ENGLISH_LEVELS.SUCCESS:
      return {
        ...state,
        englishLevelType: action.payload.englishLevelType,
        isLoading: false,
      };
    case GET_ENGLISH_LEVELS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
