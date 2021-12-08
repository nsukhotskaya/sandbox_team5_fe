import API from './api';
import {
  getStacksSkillsRequest,
  getStacksSkillsSuccess,
  getStacksSkillsFailure,
} from '../actions';

const fetchSkillsByStackTypes = (stackTypes) => async (dispatch) => {
  dispatch(getStacksSkillsRequest());
  try {
    const stackTypesParams = stackTypes.map((stackType) => `stackTypes=${stackType}`)
    const responseParamsString = stackTypesParams.join("&")
    const response = await API.get(
      `api/Skill/getSkillsByStackTypes?${responseParamsString}`,
    );
    dispatch(getStacksSkillsSuccess(response.data));
  } catch (error) {
    dispatch(getStacksSkillsFailure());
  }
};

export default fetchSkillsByStackTypes;
