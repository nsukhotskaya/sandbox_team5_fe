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
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { fetchContactTime, setEventToCalendar } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import './SetInterview.sass';

export const SetInterview = ({ user }) => {
const contactTime = useSelector((state) => state.contactTime.contactTime);
const [value, setValue] = useState(new Date());

const dispatch = useDispatch();

const [interviewTime, setInterviewTime] = useState([]);
const { id, userName, roleType, email } = user;

// const interviewStartTime = contactTime && contactTime.map((item) => item.startTime)
// const interviewEndTime = contactTime && contactTime.map((item) => item.endTime)
// const timeId = contactTime && contactTime.map((item) => item.id)

const test = contactTime && contactTime.filter((item) => item.startTime === interviewTime)

useEffect(() => {
    dispatch(fetchContactTime(id));
}, []);


const handleSubmit = () => {
    dispatch(setEventToCalendar({
        startTime: test[0].startTime,
        endTime: test[0].endTime,
        interviewerEmail: email,
        id: test[0].id,
    }));
}

const interviewInterval = contactTime.map((time) => (
    <MenuItem key={time} value={time.startTime}>
        <ListItemText primary={dayjs(time.startTime).format('D/MM/YYYY HH:mm').concat(" - ").concat(dayjs(time.endTime).format('HH:mm'))} />
    </MenuItem>
))

return (
<Box>
    <Box>
        <Box display="flex" flexDirection="row" alignItems="baseline">
            <Typography variant="h6" pr="10px">{userName}</Typography>
            <Typography variant="h6" fontWeight="300" pr="10px">{roleType}</Typography>
        </Box>
        {roleType === "Hr" ? (
        <Box className="timeSetBox">
            <Box className="timeSelect">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        renderInput={(props) => <TextField {...props} />}
                        label="Set interview"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Box>
            <Button onClick={handleSubmit} size="small" variant="contained">
                {getFieldLabel('candidate.interview.set.button')}
            </Button>
        </Box>) : (
            <Box className="timeSetBox">
            <Box className="timeSelect">
                <FormControl size="small" fullWidth>
                    <InputLabel>
                        {getFieldLabel('candidate.interview.select')}
                    </InputLabel>
                    <Select
                        value={interviewTime}
                        onChange={(event) => setInterviewTime(event.target.value)}
                        label="Set interview"
                    >
                   {interviewInterval}
                    </Select>
                </FormControl>
            </Box>
            <Button onClick={handleSubmit} size="small" variant="contained">
                {getFieldLabel('candidate.interview.set.button')}
            </Button>
        </Box>)}
    </Box>
</Box>
);
};

export default SetInterview;
