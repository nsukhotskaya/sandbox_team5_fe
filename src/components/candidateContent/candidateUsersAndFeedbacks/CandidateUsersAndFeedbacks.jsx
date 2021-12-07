import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Divider } from '@mui/material';
import './candidateUsersAndFeedbacks.sass';
import { CandidateHr, CandidateInterviewer, CandidateMentor } from '../index';
import { getFieldLabel } from '../../../utils';

export const CandidateUsersAndFeedbacks = ({ candidateInfo }) => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const assignedHr = candidateInfo.users?.find(
    (userType) => userType.roleType === 'Hr',
  );
  const assignedInterviewer = candidateInfo.users?.find(
    (userType) => userType.roleType === 'Interviewer',
  );

  return (
    <Box className="feedbacksContainer" padding="2% 2% 2% 3%">
      <Box
        marginRight="3%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Typography variant="h4" fontWeight="300">
          {getFieldLabel('candidate.page.users.title')}
        </Typography>
      </Box>
      <Divider />
      <Box marginTop="2%">
        
        <CandidateHr candidateInfo={candidateInfo} />
        {!!assignedHr && <CandidateInterviewer candidateInfo={candidateInfo} />}
        {!!assignedInterviewer && (userInfo.roleType !== "Interviewer") && (
          <CandidateMentor candidateInfo={candidateInfo} />
        )}
      </Box>
    </Box>
  );
};

export default CandidateUsersAndFeedbacks;
