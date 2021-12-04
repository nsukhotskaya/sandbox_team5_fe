import React from 'react';
import { Box } from '@mui/material';
import './CandidateFeedbacks.sass';
import { CandidateFeedbacksItem, AssignUsers, SetInterview } from '../index';

const CandidateFeedbacks = ({ candidateInfo }) => (
  <Box className="feedbacksContainer"  padding="2% 2% 0% 3%">
    <AssignUsers
    candidateInfo={candidateInfo}
    />
    {!!candidateInfo.users &&
    candidateInfo.users.map((user) => (
        <SetInterview
          user={user}
          candidateInfo={candidateInfo}
      />
    ))}
    {!!candidateInfo.users &&
      candidateInfo.users.map((user) => (
        <CandidateFeedbacksItem
          key={user.id}
          user={user}
          candidateInfo={candidateInfo}
        />
      ))}
  </Box>
);

export default CandidateFeedbacks;
