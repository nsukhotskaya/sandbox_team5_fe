import React, { useState, useEffect } from 'react';
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
import { fetchAllUsers, updateCandidateInfo } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import { CandidateFeedbacksItem } from '../index';
import './candidateMentor.sass';

export const CandidateMentor = ({ candidateInfo }) => {
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const [assignMentors, setAssignMentors] = useState(null);
  const [editAssignedMentor, setEditAssignedMentor] = useState(false);

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
      .map((u) => ({ id: u.id }));
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
    <Box className="assignUserContainer" p="10px">
      {(!assignedMentor || editAssignedMentor) && (
        <Box className="assignUserBox">
          <Box className="assignUserSelect">
            <FormControl size="small" fullWidth>
              <InputLabel>
                {getFieldLabel('candidate.assign.mentor.select')}
              </InputLabel>
              <Select
                value={assignMentors}
                onChange={(event) => setAssignMentors(event.target.value)}
                label="Select Mentor"
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
