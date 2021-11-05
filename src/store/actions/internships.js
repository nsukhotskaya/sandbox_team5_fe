import { GET_INTERNSHIPS } from '../commands/types';
import API from '../commands/api';

const getInternshipsSuccess = (data) => ({
    type: GET_INTERNSHIPS.SUCCESS,
    payload: data,
  });
  
  const getInternshipsFailure = () => ({
    type: GET_INTERNSHIPS.FAILURE,
  });

export const getInternships = () => async (dispatch) => {
    try { 
      dispatch({
        type: GET_INTERNSHIPS.REQUEST,
      });
      const response = await API.post(
        `/api/Internship/getInternships`,
        {
          pageSize: 10000,
          pageNumber: 1,
        },
      );
      console.log(response);
      dispatch(getInternshipsSuccess(response.data));
    } catch (error) {
      dispatch(getInternshipsFailure);
    }
  };

export default getInternships;
