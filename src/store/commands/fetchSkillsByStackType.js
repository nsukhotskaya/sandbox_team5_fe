import API from './api';
import {
  getSkillsRequest,
  getSkillsSuccess,
  getSkillsFailure,
} from '../actions';

const fetchSkillsByStackType = (stackType) => async (dispatch) => {
  dispatch(getSkillsRequest());
  try {
    const response = await API.get(
      `api/Skill/getSkillsByStackType?stackType=${stackType}`,
    );
    dispatch(getSkillsSuccess(response.data));
  } catch (error) {
    dispatch(getSkillsFailure());
  }
};

export default fetchSkillsByStackType;
