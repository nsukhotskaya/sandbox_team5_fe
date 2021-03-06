import React, { useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './candidateUsersAndFeedbacks.sass';
import { CandidateHr, CandidateInterviewer, CandidateMentor } from '../index';
import { getFieldLabel } from '../../../utils';
import {
  fetchAllUsers,
  fetchStacksByInternshipId,
} from '../../../store/commands';

export const CandidateUsersAndFeedbacks = ({ candidateInfo }) => {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const stacksByInternshipId = useSelector(
    (state) => state.stacksByInternshipId.stacksByInternshipId,
  );
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );

  useEffect(() => {
    if (candidateInfo.internshipId) {
      dispatch(fetchStacksByInternshipId(candidateInfo.internshipId));
    }
    if (authorizedUserRole !== 'Interviewer') {
      dispatch(fetchAllUsers());
    }
  }, []);

  const filteredStacks = stacksByInternshipId.filter(
    (stack) => stack.internshipId === candidateInfo.internshipId,
  );

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
        <CandidateHr candidateInfo={candidateInfo} allUsers={allUsers} />
        {!!assignedHr && (
          <CandidateInterviewer
            candidateInfo={candidateInfo}
            allUsers={allUsers}
            stacks={filteredStacks.map((stack) => stack.technologyStackType)}
          />
        )}
        {!!assignedInterviewer && (
          <CandidateMentor candidateInfo={candidateInfo} allUsers={allUsers} />
        )}
      </Box>
    </Box>
  );
};

export default CandidateUsersAndFeedbacks;
