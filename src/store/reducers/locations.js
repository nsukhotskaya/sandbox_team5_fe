import { GET_LOCATIONS } from '../actions';

const initialState = {
  locations: [],
  isLoading: false,
};

export default function locations(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS.REQUEST:
      return { ...state, isLoading: true };
    case GET_LOCATIONS.SUCCESS: {
      return { ...state, locations: action.payload.locations, isLoading: false };
    }
    case GET_LOCATIONS.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
