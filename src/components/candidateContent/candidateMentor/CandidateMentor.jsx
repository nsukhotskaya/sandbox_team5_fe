import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from '@mui/material';
import { updateCandidateInfo } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import { CandidateFeedbacksItem } from '../index';
import './candidateMentor.sass';

export const CandidateMentor = ({ candidateInfo, allUsers }) => {
  const dispatch = useDispatch();
  const [assignMentors, setAssignMentors] = useState([]);
  const [editAssignedMentor, setEditAssignedMentor] = useState(false);
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );
  const mentors = allUsers.filter((user) => user.roleType === 'Mentor');

  const userIds = [assignMentors];
  const { skip, take, searchText, sortBy, isDesc, ...newCandidate } =
    candidateInfo;
  const assignedMentor = candidateInfo.users?.find(
    (user) => user.roleType === 'Mentor',
  );

  const handleSubmit = () => {
    const assignedUsers = allUsers
      .filter((user) => userIds.includes(user.id))
      .map((mentor) => ({ id: mentor.id }));
    dispatch(
      updateCandidateInfo({
        ...newCandidate,
        users: [
          ...newCandidate.users.filter((user) => user.roleType !== 'Mentor'),
          ...assignedUsers,
        ],
      }),
    );
  };

  const handleEditMentorClick = () => {
    setEditAssignedMentor(!editAssignedMentor);
  };

  return (
    <Box className="assignMentorContainer" p="10px">
      {(!assignedMentor || editAssignedMentor) &&
        (authorizedUserRole === 'Hr' ||
          authorizedUserRole === 'Manager' ||
          authorizedUserRole === 'Admin') && (
          <Box className="assignMentorBox">
            <Box className="assignMentorSelect">
              <FormControl size="small" fullWidth>
                <InputLabel>
                  {getFieldLabel('candidate.assign.mentor.select')}
                </InputLabel>
                <Select
                  value={assignMentors}
                  onChange={(event) => setAssignMentors(event.target.value)}
                  label="Assign Mentor"
                >
                  {mentors.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      <ListItemText primary={user.userName} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button onClick={handleSubmit} size="small" variant="outlined">
              {getFieldLabel('common.assign')}
            </Button>
          </Box>
        )}
      {!!assignedMentor && !editAssignedMentor && (
        <Box>
          <CandidateFeedbacksItem
            handleEditClick={handleEditMentorClick}
            key={assignedMentor.id}
            user={assignedMentor}
            candidateInfo={candidateInfo}
          />
        </Box>
      )}
    </Box>
  );
};

export default CandidateMentor;
