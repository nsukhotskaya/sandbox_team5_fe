import React, { useState } from 'react';
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
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { locations, stacks, hrs } from '../../mocks/internshipsFilter.json';
import { getFieldLabel } from '../../utils';

export const InternshipsFilter = () => {
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [filterLocation, setFilterLocation] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterStack, setFilterStack] = useState([]);
  const [filterHRs, setFilterHRs] = useState([]);
  const [filterInterviewers, setFilterInterviewers] = useState([]);
  const [filterMentors, setFilterMentors] = useState([]);

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
          height="480px"
          padding="20px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography align="center" color="primary" fontSize="20px">{getFieldLabel('internships.filter.title')}</Typography>
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
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  <Checkbox checked={filterLocation.indexOf(location) > -1} />
                  <ListItemText primary={location} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.language')}
            </InputLabel>
            <Select
              value={filterLanguage}
              label="Language"
              onChange={(event) => setFilterLanguage(event.target.value)}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Russian">Russian</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('internships.filter.label.status')}
            </InputLabel>
            <Select
              value={filterStatus}
              label="Status"
              onChange={(event) => setFilterStatus(event.target.value)}
            >
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="Close">Close</MenuItem>
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
              {stacks.map((stack) => (
                <MenuItem key={stack} value={stack}>
                  <Checkbox checked={filterStack.indexOf(stack) > -1} />
                  <ListItemText primary={stack} />
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
              {hrs.map((hr) => (
                <MenuItem key={hr} value={hr}>
                  <Checkbox checked={filterHRs.indexOf(hr) > -1} />
                  <ListItemText primary={hr} />
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
              {hrs.map((hr) => (
                <MenuItem key={hr} value={hr}>
                  <Checkbox checked={filterInterviewers.indexOf(hr) > -1} />
                  <ListItemText primary={hr} />
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
              {hrs.map((hr) => (
                <MenuItem key={hr} value={hr}>
                  <Checkbox checked={filterMentors.indexOf(hr) > -1} />
                  <ListItemText primary={hr} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button size="small" variant="contained">
            Filter
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default InternshipsFilter;
