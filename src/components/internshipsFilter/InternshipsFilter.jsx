import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
  Popover,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  ListItemText,
  Typography,
  TextField,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CloseIcon from '@mui/icons-material/Close';
import { getFieldLabel } from '../../utils';

export const InternshipsFilter = ({ onFilter }) => {
  const [anchorEl, setAnchorEl] = useState();
  const locationsList = useSelector((state) => state.locations.locations);
  const stacksList = useSelector((state) => state.stacks.stacks);
  const languagesList = useSelector((state) => state.languages.languages);
  const allUsers = useSelector((state) => state.allUsers.allUsers);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = 'popover';

  const [filterLocation, setFilterLocation] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterStack, setFilterStack] = useState([]);
  const [filterHRs, setFilterHRs] = useState([]);
  const [filterInterviewers, setFilterInterviewers] = useState([]);
  const [filterMentors, setFilterMentors] = useState([]);
  const [filterYears, setFilterYears] = useState(null);

  const handleSubmit = () => {
    const filters = {};
    if (filterLocation.length) {
      filters.locations = filterLocation;
    }
    if (filterLanguage.length) {
      filters.languageTypes = filterLanguage;
    }
    if (filterStatus.length) {
      filters.internshipStatusType = filterStatus;
    }
    if (filterStack.length) {
      filters.internshipStacks = filterStack;
    }
    if (filterHRs.length) {
      filters.attachedUsers = filterHRs;
    }
    if (filterInterviewers.length) {
      filters.attachedUsers = filterInterviewers;
    }
    if (filterMentors.length) {
      filters.attachedUsers = filterMentors;
    }
    if (filterYears) {
      filters.internshipYear = dayjs(filterYears).format('YYYY');
    }
    onFilter(filters);
  };

  const cleanFilter = () => {
    setFilterLocation([]);
    setFilterLanguage([]);
    setFilterStatus([]);
    setFilterStack([]);
    setFilterHRs([]);
    setFilterInterviewers([]);
    setFilterMentors([]);
    setFilterYears(null);
    onFilter({});
  };

  const hrs = allUsers.filter((user) => user.roleType === 'Hr');
  const interviewers = allUsers.filter(
    (user) => user.roleType === 'Interviewer',
  );
  const mentors = allUsers.filter((user) => user.roleType === 'Mentor');

  return (
    <Box>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <FilterListIcon fontSize="large" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          width="350px"
          height="540px"
          padding="20px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          position="relative"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography align="center" color="#757575" fontSize="20px">
              {getFieldLabel('common.filter.title')}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button onClick={cleanFilter} size="small">
                {getFieldLabel('common.reset')}
              </Button>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.status')}
            </InputLabel>
            <Select
              value={filterStatus}
              label="Status"
              onChange={(event) => setFilterStatus(event.target.value)}
            >
              <MenuItem value="Open">{getFieldLabel('common.open')}</MenuItem>
              <MenuItem value="Close">{getFieldLabel('common.close')}</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.location')}
            </InputLabel>
            <Select
              multiple
              value={filterLocation}
              onChange={(event) => setFilterLocation(event.target.value)}
              label="Location"
              renderValue={(selected) => selected.join(', ')}
            >
              {locationsList.map((location) => (
                <MenuItem key={location.name} value={location.name}>
                  <Checkbox
                    checked={filterLocation.indexOf(location.name) > -1}
                  />
                  <ListItemText primary={<>{location.name}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.language')}
            </InputLabel>
            <Select
              multiple
              value={filterLanguage}
              onChange={(event) => setFilterLanguage(event.target.value)}
              label="Language"
              renderValue={(selected) => selected.join(', ')}
            >
              {languagesList.map((language) => (
                <MenuItem key={language} value={language}>
                  <Checkbox checked={filterLanguage.indexOf(language) > -1} />
                  <ListItemText primary={<>{language}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.stack')}
            </InputLabel>
            <Select
              multiple
              value={filterStack}
              onChange={(event) => setFilterStack(event.target.value)}
              label="Stack"
              renderValue={(selected) => selected.join(', ')}
            >
              {stacksList.map((stack) => (
                <MenuItem key={stack} value={stack}>
                  <Checkbox checked={filterStack.indexOf(stack) > -1} />
                  <ListItemText primary={<>{stack}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.hrs')}
            </InputLabel>
            <Select
              multiple
              value={filterHRs}
              onChange={(event) => setFilterHRs(event.target.value)}
              label="HRs"
              renderValue={(selected) => selected.join(', ')}
            >
              {hrs.map((user) => (
                <MenuItem key={user.id} value={user.userName}>
                  <Checkbox checked={filterHRs.indexOf(user.userName) > -1} />
                  <ListItemText primary={<>{user.userName}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.interviewers')}
            </InputLabel>
            <Select
              multiple
              value={filterInterviewers}
              onChange={(event) => setFilterInterviewers(event.target.value)}
              label="Interviewers"
              renderValue={(selected) => selected.join(', ')}
            >
              {interviewers.map((user) => (
                <MenuItem key={user.id} value={user.userName}>
                  <Checkbox
                    checked={filterInterviewers.indexOf(user.userName) > -1}
                  />
                  <ListItemText primary={<>{user.userName}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.mentors')}
            </InputLabel>
            <Select
              multiple
              value={filterMentors}
              onChange={(event) => setFilterMentors(event.target.value)}
              label="Mentors"
              renderValue={(selected) => selected.join(', ')}
            >
              {mentors.map((user) => (
                <MenuItem key={user.id} value={user.userName}>
                  <Checkbox
                    checked={filterMentors.indexOf(user.userName) > -1}
                  />
                  <ListItemText primary={<>{user.userName}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={['year']}
                label="Year"
                value={filterYears || new Date()}
                onChange={(newValue) => {
                  setFilterYears(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          <Button onClick={handleSubmit} size="small" variant="contained">
            {getFieldLabel('common.filter')}
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default InternshipsFilter;
