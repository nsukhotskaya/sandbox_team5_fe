import { GET_ENGLISH_LEVEL } from '../actions';

const initialState = {
  englishLevels: [],
  isLoading: false,
};

export default function englishLevel(state = initialState, action) {
  switch (action.type) {
    case GET_ENGLISH_LEVEL.REQUEST:
      return { ...state, isLoading: true };
    case GET_ENGLISH_LEVEL.SUCCESS: {
      return {
        ...state,
        englishLevels: action.payload.englishLevels,
        isLoading: false,
      };
    }
    case GET_ENGLISH_LEVEL.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}