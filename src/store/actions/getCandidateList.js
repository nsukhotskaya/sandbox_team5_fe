import { GET_CANDIDATE_LIST } from '../commands/types';

export const getCandidateListRequest = () => ({
  type: GET_CANDIDATE_LIST.REQUEST,
  payload: null,
});

export const getCandidateListSuccess = (data) => ({
  type: GET_CANDIDATE_LIST.SUCCESS,
  payload: { candidates: data },
});

export const getCandidateListFailure = (error) => ({
  type: GET_CANDIDATE_LIST.FAILURE,
  payload: { error },
});
