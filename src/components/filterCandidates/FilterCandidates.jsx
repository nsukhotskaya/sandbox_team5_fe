import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  ListItemText,
  Typography,
  FormControlLabel,
  IconButton,
  Popover,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { getFieldLabel } from '../../utils';

export const FilterCandidates = ({ onFilter }) => {
  const [filterLocation, setFilterLocation] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterEnglishLevel, setFilterEnglishLevel] = useState([]);
  const [checked, setChecked] = useState(false);
  const locationsList = useSelector((state) => state.locations.locations);
  const languagesList = useSelector((state) => state.languages.languages);
  const englishLevelList = useSelector(
    (state) => state.englishLevels.englishLevels,
  );
  const candidateStatusTypesList = useSelector(
    (state) => state.candidateStatusTypes.candidateStatusTypes,
  );
  const authorizedUser = useSelector((state) => state.userInfo.userInfo);
  const authorizedUserId = authorizedUser.id;
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = 'popover';

  const handleSubmit = () => {
    onFilter({
      locations: filterLocation.length ? filterLocation : null,
      languageTypes: filterLanguage.length ? filterLanguage : null,
      statusTypes: filterStatus.length ? filterStatus : null,
      englishLevels: filterEnglishLevel.length ? filterEnglishLevel : null,
      userId: checked ? authorizedUserId : null,
    });
  };

  const reset = () => {
    setFilterLocation([]);
    setFilterLanguage([]);
    setFilterStatus([]);
    setFilterEnglishLevel([]);
    setChecked(false);
    onFilter({});
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="20px"
          width="340px"
          height="400px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography color="#757575" fontSize="20px">
                {getFieldLabel('common.filter.title')}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button onClick={reset} size="small">
                {getFieldLabel('common.reset')}
              </Button>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
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
              label="Language"
              onChange={(event) => setFilterLanguage(event.target.value)}
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
              {getFieldLabel('internships.filter.label.status')}
            </InputLabel>
            <Select
              multiple
              value={filterStatus}
              label="Status"
              onChange={(event) => setFilterStatus(event.target.value)}
              renderValue={(selected) => selected.join(', ')}
            >
              {candidateStatusTypesList &&
                candidateStatusTypesList.map((statusType) => (
                  <MenuItem key={statusType} value={statusType}>
                    <Checkbox checked={filterStatus.indexOf(statusType) > -1} />
                    <ListItemText primary={<>{statusType}</>} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>
              {getFieldLabel('candidates.filter.label.englishLevel')}
            </InputLabel>
            <Select
              multiple
              value={filterEnglishLevel}
              onChange={(event) => setFilterEnglishLevel(event.target.value)}
              label="English Level"
              renderValue={(selected) => selected.join(', ')}
            >
              {englishLevelList.map((level) => (
                <MenuItem key={level} value={level}>
                  <Checkbox checked={filterEnglishLevel.indexOf(level) > -1} />
                  <ListItemText primary={<>{level}</>} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <FormControlLabel
              className="filterFormControlLabel"
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="My candidates"
            />
          </FormControl>
          <Button onClick={handleSubmit} size="small" variant="contained">
            {getFieldLabel('common.filter')}
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default FilterCandidates;
