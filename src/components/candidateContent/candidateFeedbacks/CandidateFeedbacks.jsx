import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { 
  // fetchSkillsByStackType,
   fetchFeedbacksByCandidateId } from '../../../store/commands';
import './CandidateFeedbacks.sass';
// import { skills } from '../../../mocks/candidateFeedbacks.json';
import { CandidateFeedbacksItem, CreateFeedback } from '../index';

const CandidateFeedbacks = ({ candidateInfo }) => {
  const dispatch = useDispatch();
  // const skillsList = useSelector((state) => state.skills.skills);
  const feedbacksList = useSelector((state) => state.candidateFeedbacks.candidateFeedbacks);

  useEffect(() => {
    if (!feedbacksList.length && candidateInfo.id) {
      dispatch(fetchFeedbacksByCandidateId(candidateInfo.id));
    }
  }, [candidateInfo.id]);

  // useEffect(() => {
  //   if (!skillsList.length && candidateInfo.stackType) {
  //     dispatch(fetchSkillsByStackType(candidateInfo.stackType));
  //   }
  // }, [skillsList]);

  return (
    <Box className="feedbacksContainer">
        {!!candidateInfo.users && candidateInfo.users.map((user)=>(
          !user.feedbacks.length &&
          <CreateFeedback key={user.id} role={user.roleType} name={user.userName} userId={user.id} englishLevelType={candidateInfo.englishLevelType} candidateId={candidateInfo.id}/>
        ))}
        {!!feedbacksList.length && feedbacksList.map((feedback) => (
        <CandidateFeedbacksItem key={feedback.id} feedback={feedback} users={candidateInfo.users}/>
        ))}
    </Box>
  );
};

export default CandidateFeedbacks;
