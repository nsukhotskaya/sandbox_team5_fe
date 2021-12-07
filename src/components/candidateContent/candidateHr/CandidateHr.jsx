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
import './candidateHr.sass';

export const CandidateHr = ({ candidateInfo }) => {
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const [assignHRs, setAssignHRs] = useState('');
  const hrs = allUsers.filter((user) => user.roleType === 'Hr');

  const userIds = [assignHRs];
  const { skip, take, searchText, sortBy, isDesc, ...newCandidate } =
    candidateInfo;
  const assignedHr = candidateInfo.users?.find(
    (user) => user.roleType === 'Hr',
  );

  const handleSubmit = () => {
    const assignedUsers = allUsers
      .filter((user) => userIds.includes(user.id))
      .map((hr) => ({ id: hr.id }));
    dispatch(
      updateCandidateInfo({
        ...newCandidate,
        statusType: !!assignHRs && 'HR_Review',
        users: [
          ...newCandidate.users.filter((user) => user.roleType !== 'Hr'),
          ...assignedUsers,
        ],
      }),
    );
  };

  const [editAssignedHr, setEditAssignedHr] = useState(false);
  const handleEditHrClick = () => {
    setEditAssignedHr(!editAssignedHr);
  };

  return (
    <Box className="assignHrContainer" p="10px">
      {(authorizedUserRole === 'Hr' ||
        authorizedUserRole === 'Manager' ||
        authorizedUserRole === 'Admin') &&
        (!assignedHr || editAssignedHr) && (
          <Box className="assignHrBox">
            <Box className="assignHrSelect">
              <FormControl size="small" fullWidth>
                <InputLabel>
                  {getFieldLabel('candidate.assign.hr.select')}
                </InputLabel>
                <Select
                  value={assignHRs}
                  onChange={(event) => setAssignHRs(event.target.value)}
                  label="Assign HR"
                >
                  {hrs.map((user) => (
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
      {!!assignedHr && !editAssignedHr && (
        <Box>
          <CandidateFeedbacksItem
            handleEditClick={handleEditHrClick}
            key={assignedHr.id}
            user={assignedHr}
            candidateInfo={candidateInfo}
          />
        </Box>
      )}
    </Box>
  );
};

export default CandidateHr;
