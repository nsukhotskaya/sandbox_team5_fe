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
import './AssignUsers.sass';

export const AssignUsers = (candidateInfo) => {
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  

  const [assignHRs, setAssignHRs] = useState(null);
  const [assignInterviewers, setAssignInterviewers] = useState(null);
  // const [assignMentors, setAssignMentors] = useState(null);

  const hrs = allUsers.filter((user) => user.roleType === 'Hr');
  const interviewers = allUsers.filter((user) => user.roleType === 'Interviewer');
  // const mentors = allUsers.filter((user) => user.roleType === 'Mentor');
  
  
  const userIds = [assignHRs, assignInterviewers];
  // eslint-disable-next-line react/destructuring-assignment
  const { skip, take, searchText, sortBy, isDesc,...newCandidate} = candidateInfo.candidateInfo;
  // eslint-disable-next-line react/destructuring-assignment
  const isHrSet = candidateInfo.candidateInfo.users?.find((user) => user.roleType === "Hr");
  // eslint-disable-next-line react/destructuring-assignment
  const isInterviewerSet = candidateInfo.candidateInfo.users?.find((user) => user.roleType === "Interviewer");

  const handleSubmit = () => {
    const assignedUsers = allUsers.filter((user) => userIds.includes(user.id)).map((u) => ({id: u.id}))
    dispatch(updateCandidateInfo({...newCandidate, statusType: assignHRs ? "HR_Review" : "InterviewerReview", users: [...newCandidate.users, ...assignedUsers]}))
  };

return (
  <Box className="assignUserContainer">
    {!isHrSet && <Box className="assignUserBox">
      <Box className="assignUserSelect">
        <FormControl size="small" fullWidth>
          <InputLabel>
            {getFieldLabel('internships.filter.label.hrs')}
          </InputLabel>
          <Select
            value={assignHRs}
            onChange={(event) => setAssignHRs(event.target.value)}
            label="HRs"
          >
            {hrs.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <ListItemText primary={user.userName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handleSubmit} size="small" variant="contained">
        {getFieldLabel('common.assign')}
      </Button>
    </Box>}
    {!isInterviewerSet && <Box className="assignUserBox">
      <Box className="assignUserSelect">
        <FormControl size="small" fullWidth>
          <InputLabel>
            {getFieldLabel('internships.filter.label.interviewers')}
          </InputLabel>
          <Select
            value={assignInterviewers}
            onChange={(event) => setAssignInterviewers(event.target.value)}
            label="Interviewers"
          >
            {interviewers.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <ListItemText primary={user.userName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handleSubmit} size="small" variant="contained">
        {getFieldLabel('common.assign')}
      </Button>
    </Box>}
    {/* <Box className="assignUserBox">
      <Box  className="assignUserSelect">
        <FormControl size="small" fullWidth>
          <InputLabel>
            {getFieldLabel('internships.filter.label.mentors')}
          </InputLabel>
          <Select
            value={assignMentors}
            onChange={(event) => setAssignMentors(event.target.value)}
            label="Mentors"
          >
            {mentors.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <ListItemText primary={user.userName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handleSubmit} size="small" variant="contained">
        {getFieldLabel('common.assign')}
      </Button>
    </Box> */}
  </Box>
  );
};

export default AssignUsers;