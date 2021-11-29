import React from 'react';
import { Box } from '@mui/material';
import './CandidateFeedbacks.sass';
import { CandidateFeedbacksItem, CreateFeedback } from '../index';

const CandidateFeedbacks = ({ candidateInfo, feedbacksList }) => {
  console.log(candidateInfo)
  console.log(feedbacksList)
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
