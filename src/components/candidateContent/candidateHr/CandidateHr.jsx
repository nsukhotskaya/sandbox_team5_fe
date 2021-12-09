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
import './candidateHr.sass';
import { Confirm } from '../../confirm';

export const CandidateHr = ({ candidateInfo, allUsers }) => {
  const [openAssignConfirm, setOpenAssignConfirm] = useState(false);
  const dispatch = useDispatch();
  const [assignHRs, setAssignHRs] = useState([]);
  const hrs = allUsers.filter((user) => user.roleType === 'Hr');
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );
  const userIds = [assignHRs];
  const { skip, take, searchText, sortBy, isDesc, ...newCandidate } =
    candidateInfo;
  const assignedHr = candidateInfo.users?.find(
    (user) => user.roleType === 'Hr',
  );

  const [editAssignedHr, setEditAssignedHr] = useState(false);

  const handleAssign = (value) => {
    if (value) {
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
    }
    setOpenAssignConfirm(false);
  };

  const handleClickAssign = () => {
    setOpenAssignConfirm(true);
  };

  const handleEditAssign = () => {
    setEditAssignedHr(!editAssignedHr);
  };

  return (
    <Box className="assignHrContainer" p="10px">
      {openAssignConfirm && (
        <Confirm
          confirmTitle={getFieldLabel('assign.confirm.message')}
          rejectButtonLabel={getFieldLabel('common.no')}
          acceptButtonLabel={getFieldLabel('common.yes')}
          callback={handleAssign}
        />
      )}
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
            <Button onClick={handleClickAssign} size="small" variant="outlined">
              {getFieldLabel('common.assign')}
            </Button>
          </Box>
        )}
      {!!assignedHr && !editAssignedHr && (
        <Box>
          <CandidateFeedbacksItem
            handleEditClick={handleEditAssign}
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
