export const GET_SKILLS = {
  REQUEST: 'GET_SKILLS_REQUEST',
  SUCCESS: 'GET_SKILLS_SUCCESS',
  FAILURE: 'GET_SKILLS_FAILURE',
};

export const getSkillsRequest = () => ({
  type: GET_SKILLS.REQUEST,
  payload: null,
});

export const getSkillsSuccess = (data) => ({
  type: GET_SKILLS.SUCCESS,
  payload: { skills: data },
});

export const getSkillsFailure = (error) => ({
  type: GET_SKILLS.FAILURE,
  payload: { error },
});
