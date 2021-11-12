import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Stack,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CardTitle } from '../cardTitle';
import { getFieldLabel } from '../../utils';
import { locationData, languageType } from '../../mocks/createInternshipData.json';
import './AddProgram.sass';

const dateArrayFields = [
  ['startDate', 'Start date'],
  ['endDate', 'End date'],
  ['registrationStartDate', 'Registration start'],
  ['registrationEndDate', 'Registration end'],
];

const textFieldsArray = [
  ['name', 'Title'],
  ['requirements', 'Requirements'],
  ['maxCandidateCount', 'Candidate Count'],
];

const AddProgram = (props) => {
  const { closeModal } = props;
  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '2001-11-09T17:31:07.301Z',
      endDate: '2001-11-09T17:31:07.301Z',
      requirements: ' ',
      maxCandidateCount: 0,
      registrationStartDate: '2001-11-09T17:31:07.301Z',
      registrationFinishDate: '2001-11-09T17:31:07.301Z',
      languageType: '0',
      internshipStatusType: ' ',
      imageLink: ' ',
      internshipStacks: [],
      locations: 'Belarus',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box className="container" onSubmit={(event) => console.log(event)}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CardTitle width="100%" title={getFieldLabel('addprogram.title')} />
            <Stack spacing={2} direction="column">
              {textFieldsArray.map((item) => (
                <TextField
                  label={item[1]}
                  name={item[0]}
                  value={formik.values[`${item[0]}`]}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              ))}
              <TextField
                select
                label="Language"
                name="languageType"
                value={formik.values.languageType}
                onChange={formik.handleChange}
                helperText="Please select internship language"
                variant="standard"
              >
                {languageType.map((item, index) => (
                  <MenuItem key={item} value={index}>{item}</MenuItem>
                ))}
              </TextField>
              {/* eslint-disable react/jsx-props-no-spreading */}
              {dateArrayFields.map((item) => (
                <MobileDateTimePicker
                  label={item[1]}
                  name={item[0]}
                  value={formik.values[`${item[0]}`]}
                  inputFormat="yyyy/MM/dd hh:mm a"
                  onChange={(date) => formik.setFieldValue(item[0], date)}
                  mask="___/__/__ __:__ _M"
                  renderInput={(params) => <TextField {...params} />}
                  key={item[0]}
                />
              ))}
              {/* eslint-enable react/jsx-props-no-spreading */}
              <TextField
                required
                select
                label="Locations"
                name="locations"
                value={formik.values.location}
                onChange={(value) => formik.setFieldValue('locations', value)}
                helperText="Please select internship location"
                variant="standard"
              >
                {locationData.map((item) => (
                  <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                ))}
              </TextField>
            </Stack>
          </LocalizationProvider>
        </Box>
        <Box className="buttonWrapper">
          <Button variant="contained" type="submit">
            {getFieldLabel('addprogram.button.add')}
          </Button>
          <Button variant="outlined" onClick={closeModal}>
            {getFieldLabel('addprogram.button.cancel')}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddProgram;
