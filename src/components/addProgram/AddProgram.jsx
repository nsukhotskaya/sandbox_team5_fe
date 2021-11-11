import React, { useState } from 'react';
import {
  Box, TextField, Stack, Button, MenuItem,
} from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CardTitle } from '../cardTitle';
import { getFieldLabel } from '../../utils';
// import messages from '../../utils/messages.json';
import './AddProgram.sass';

const AddProgram = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(new Date('2021-01-01T21:00:00.000Z'));
  const [endDate, setEndDate] = useState(new Date('2021-01-01T21:00:00.000Z'));
  const [registrationStartDate, setRegistrationStartDate] = useState(new Date('2021-01-01T21:00:00.000Z'));
  const [registrationEndDate, setRegistrationEndDate] = useState(new Date('2021-01-01T21:00:00.000Z'));
  const [languageType, setLanguageType] = useState('');
  const [location, setLocation] = useState('');
  const [newInternship, setNewInternship] = useState({
    id: 0,
    name: '',
    requirements: '',
    maxCandidateCount: '',
    internshipStatusType: 0,
    imageLink: '',
    internshipStacks: [],
    locations: [],
    candidatesCount: 0,
    declinedCandidatesCount: 0,
    acceptedCandidatesCount: 0,
    abandonedCandidatesCount: 0,
    successfullyFinishedCandidatesCount: 0,
    teamsCount: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newInternshipObj = { ...newInternship };
    newInternshipObj[name] = value;
    setNewInternship(newInternshipObj);
  };

  const collectObject = () => {
    newInternship.maxCandidateCount = +(newInternship.maxCandidateCount);
    console.log({
      ...newInternship,
      startDate,
      endDate,
      registrationStartDate,
      registrationEndDate,
      languageType,
      locations: [{ id: new Date().getTime(), name: location }],
    });
    closeModal();
  };

  return (
    <>
      <Box className="container">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CardTitle width="100%" title={getFieldLabel('addprogram.title')} />
          <Stack spacing={2} direction="column">
            <TextField
              required
              label="Title"
              name="name"
              // value={newInternship.name}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              required
              label="Candidates count"
              name="maxCandidateCount"
              // value={newInternship.maxCandidateCount}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              required
              label="Requirements"
              name="requirements"
              // value={newInternship.requirements}
              onChange={handleChange}
              variant="outlined"
              multiline
            />
            <TextField
              required
              select
              label="Language"
              name="languageType"
              value={languageType}
              onChange={(event) => setLanguageType(event.target.value)}
              helperText="Please select internship language"
              variant="standard"
            >
              <MenuItem value={0}>English</MenuItem>
              <MenuItem value={1}>Russian</MenuItem>
            </TextField>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <MobileDateTimePicker
              name="startDate"
              value={startDate}
              onChange={(newDate) => setStartDate(newDate.toJSON())}
              label="Start date"
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(props) => <TextField {...props} />}
            />
            <MobileDateTimePicker
              name="endDate"
              value={endDate}
              onChange={(newDate) => setEndDate(newDate.toJSON())}
              label="End date"
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(props) => <TextField {...props} />}
            />
            <MobileDateTimePicker
              label="Registration start"
              name="registrationStartDate"
              value={registrationStartDate}
              onChange={(newDate) => setRegistrationStartDate(newDate.toJSON())}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(props) => <TextField {...props} />}
            />
            <MobileDateTimePicker
              label="Registration end"
              name="registrationEndDate"
              value={registrationEndDate}
              onChange={(newDate) => setRegistrationEndDate(newDate.toJSON())}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(props) => <TextField {...props} />}
            />
            {/* eslint-enable react/jsx-props-no-spreading */}
            <TextField
              required
              select
              label="Location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              helperText="Please select internship location"
              variant="standard"
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Belarus">Belarus</MenuItem>
              <MenuItem value="Poland">Poland</MenuItem>
              <MenuItem value="Ukraine">Ukraine</MenuItem>
            </TextField>
          </Stack>
        </LocalizationProvider>
      </Box>
      <Box className="buttonWrapper">
        <Button variant="contained" onClick={collectObject}>
          {getFieldLabel('addprogram.button.add')}
        </Button>
        <Button variant="contained">
          + New Field
        </Button>
        <Button variant="outlined" onClick={closeModal}>
          {getFieldLabel('addprogram.button.cancel')}
        </Button>
      </Box>
    </>
  );
};

export default AddProgram;
