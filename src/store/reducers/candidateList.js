import { GETCANDIDATELIST } from '../commands/types';

const initialState = {
  candidates: [],
  isLoading: false,
};

export default function candidateList(state = initialState, action) {
  switch (action.type) {
    case GETCANDIDATELIST.REQUEST:
      return { ...state, isLoading: true };
    case GETCANDIDATELIST.SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        isLoading: false,
      };
    case GETCANDIDATELIST.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
