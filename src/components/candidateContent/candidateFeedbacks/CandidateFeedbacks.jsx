import React from 'react';
import { Box } from '@mui/material';
import './CandidateFeedbacks.sass';
import { CandidateFeedbacksItem } from '../index';

const CandidateFeedbacks = ({ candidateInfo }) => (
  <Box className="feedbacksContainer">
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
