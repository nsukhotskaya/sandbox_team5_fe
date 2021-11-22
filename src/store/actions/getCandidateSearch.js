export const GET_CANDIDATE_SEARCH = {
    REQUEST: 'GET_CANDIDATE_SEARCH_REQUEST',
    SUCCESS: 'GET_CANDIDATE_SEARCH_SUCCESS',
    FAILURE: 'GET_CANDIDATE_SEARCH_FAILURE',
  };
  
  export const getCandidateSearchRequest = () => ({
    type: GET_CANDIDATE_SEARCH.REQUEST,
    payload: null,
  });
  
  export const getCandidateSearchSuccess = (data) => ({
    type: GET_CANDIDATE_SEARCH.SUCCESS,
    payload: { searchResult: data },
  });
  
  export const getCandidateSearchFailure = (error) => ({
    type: GET_CANDIDATE_SEARCH.FAILURE,
    payload: { error },
  });
  