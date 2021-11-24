import { GET_LANGUAGES } from '../actions';

const initialState = {
  languages: [],
  isLoading: false,
};

export default function languages(state = initialState, action) {
  switch (action.type) {
    case GET_LANGUAGES.REQUEST:
      return { ...state, isLoading: true };
    case GET_LANGUAGES.SUCCESS: {
      return {
        ...state,
        languages: action.payload.languages,
        isLoading: false,
      };
    }
    case GET_LANGUAGES.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
