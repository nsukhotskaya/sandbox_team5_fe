export const GET_STACKS_SKILLS = {
  REQUEST: 'GET_STACKS_SKILLS_REQUEST',
  SUCCESS: 'GET_STACKS_SKILLS_SUCCESS',
  FAILURE: 'GET_STACKS_SKILLS_FAILURE',
};

export const getStacksSkillsRequest = () => ({
  type: GET_STACKS_SKILLS.REQUEST,
  payload: null,
});

export const getStacksSkillsSuccess = (data) => ({
  type: GET_STACKS_SKILLS.SUCCESS,
  payload: { stacksSkills: data },
});

export const getStacksSkillsFailure = (error) => ({
  type: GET_STACKS_SKILLS.FAILURE,
  payload: { error },
});
