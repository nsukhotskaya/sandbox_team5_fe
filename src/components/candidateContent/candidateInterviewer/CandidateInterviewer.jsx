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
  Dialog,
  DialogTitle,
  DialogContent,
  OutlinedInput,
  DialogActions,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import {
  fetchAllUsers,
  updateCandidateInfo,
  fetchContactTime,
  setEventToCalendar,
  fetchSkillsByStackType,
} from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import { CandidateFeedbacksItem } from '../index';
import './candidateInterviewer.sass';

const formatStackType = (stackType) => {
  switch (stackType) {
    case "FrontEnd":
      return '0'
    case "BackEnd":
      return '1'
    case "FullStack":
      return '2'
    case "BusinessAnalysis":
      return '3'
    case "DevOps":
      return '4'
    case "Testing":
      return '5'
    default:
      return stackType
  }
}



export const CandidateInterviewer = ({ candidateInfo }) => {
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const contactTime = useSelector((state) => state.contactTime.contactTime);
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchSkillsByStackType(formatStackType(candidateInfo.stackType)));
  }, []);

  const [assignInterviewers, setAssignInterviewers] = useState(null);
  const [editAssignedInterviewer, setEditAssignedInterviewer] = useState(false);
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewTime, setInterviewTime] = useState(null);
  const [open, setOpen] = useState(false);

  const interviewers = allUsers.filter(
    (userType) => userType.roleType === 'Interviewer',
  );

  const userIds = [assignInterviewers];
  const { skip, take, searchText, sortBy, isDesc, ...newCandidate } =
    candidateInfo;
  const assignedInterviewer = candidateInfo.users?.find(
    (userType) => userType.roleType === 'Interviewer',
  );

  const handleSubmit = () => {
    const assignedUsers = allUsers
      .filter((userType) => userIds.includes(userType.id))
      .map((interviewer) => ({ id: interviewer.id }));
    dispatch(
      updateCandidateInfo({
        ...newCandidate,
        statusType: assignInterviewers && 'Interview_Review',
        users: [
          ...newCandidate.users.filter(
            (userType) => userType.roleType !== 'Interviewer',
          ),
          ...assignedUsers,
        ],
      }),
    );
  };

  const handleEditInterviewerClick = () => {
    setEditAssignedInterviewer(!editAssignedInterviewer);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (assignedInterviewer) {
      dispatch(fetchContactTime(assignedInterviewer.id));
    }
  }, [assignedInterviewer]);

  const isInterviewsSet = localStorage.getItem('interviewsSet')
    ? JSON.parse(localStorage.getItem('interviewsSet')).includes(
        candidateInfo.id,
      )
    : false;
    
  const name = `${candidateInfo.firstName} ${candidateInfo.lastName}`;

  const handleTimeSubmit = () => {
    const interviewsSet = localStorage.getItem('interviewsSet');
    if (interviewsSet) {
      localStorage.setItem(
        'interviewsSet',
        JSON.stringify([...JSON.parse(interviewsSet), candidateInfo.id]),
      );
    } else {
      localStorage.setItem('interviewsSet', JSON.stringify([candidateInfo.id]));
    }
    dispatch(
      setEventToCalendar({
        startTime: interviewTime.startTime,
        endTime: interviewTime.endTime,
        interviewerEmail: assignedInterviewer.email,
        id: interviewTime.id,
        candidateName: name,
      }),
    );
    setOpen(false);
  };

  const availableDates = [
    ...new Set(
      contactTime.map((time) => dayjs(time.startTime).format('D/MM/YYYY')),
    ),
  ];
  const availableTimes = contactTime.filter(
    (time) =>
      !interviewDate ||
      dayjs(time.startTime).format('D/MM/YYYY') === interviewDate,
  );

  return (
    <Box className="assignInterviewerContainer" p="10px">
      {(!assignedInterviewer || editAssignedInterviewer) && (
        <Box className="assignInterviewerBox">
          <Box className="assignInterviewerSelect">
            <FormControl size="small" fullWidth>
              <InputLabel>
                {getFieldLabel('candidate.assign.interviewer.select')}
              </InputLabel>
              <Select
                value={assignInterviewers}
                onChange={(event) => setAssignInterviewers(event.target.value)}
                label="Assign Interviewer"
              >
                {interviewers.map((userType) => (
                  <MenuItem key={userType.id} value={userType.id}>
                    <ListItemText primary={userType.userName} />
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
      {!isInterviewsSet && assignedInterviewer && (
        <Box
          display="flex"
          flex-direction="row"
          justifyContent="space-between"
          marginBottom="30px"
        >
          <Box display="flex" flex-direction="row" align-items="center">
            <Typography
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              variant="h6"
              pr="10px"
            >
              {assignedInterviewer.userName}
            </Typography>
            <Typography variant="h6" fontWeight="300" pr="10px">
              {assignedInterviewer.roleType}
            </Typography>
          </Box>
          <Button variant="outlined" onClick={handleClickOpen}>
            Set Interview Time
          </Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Set Date and Time</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Date</InputLabel>
                  <Select
                    value={interviewDate}
                    onChange={(event) => setInterviewDate(event.target.value)}
                    input={<OutlinedInput label="Date" />}
                  >
                    {availableDates.map((time) => (
                      <MenuItem value={time}>{time}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Time</InputLabel>
                  <Select
                    value={interviewTime}
                    onChange={(event) => setInterviewTime(event.target.value)}
                    input={<OutlinedInput label="Time" />}
                    disabled={!interviewDate}
                  >
                    {availableTimes.map((time) => (
                      <MenuItem value={time}>
                        {dayjs(time.startTime)
                          .format('HH:mm')
                          .concat(' - ')
                          .concat(dayjs(time.endTime).format('HH:mm'))}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>
                {getFieldLabel('common.cancel')}
              </Button>
              <Button onClick={handleTimeSubmit}>
                {getFieldLabel('candidate.interview.set.button')}
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
      {!!isInterviewsSet && !!assignedInterviewer && !editAssignedInterviewer && (
        <Box>
          <CandidateFeedbacksItem
            handleEditClick={handleEditInterviewerClick}
            key={assignedInterviewer.id}
            user={assignedInterviewer}
            candidateInfo={candidateInfo}
            skills={skills}
          />
        </Box>
      )}
    </Box>
  );
};

export default CandidateInterviewer;
