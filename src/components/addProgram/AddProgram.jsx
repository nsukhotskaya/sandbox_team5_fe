import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { fetchLocations } from '../../store/commands';
import { stacks, languages } from '../../mocks/createInternshipData.json';
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
  const locations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocations());
  }, []);
  const { closeModal } = props;
  const formik = useFormik({
    initialValues: {
      name: '',
      startDate: '2001-11-09T17:31:07.301Z',
      endDate: '2001-11-09T17:31:07.301Z',
      requirements: '',
      maxCandidateCount: 0,
      registrationStartDate: '2001-11-09T17:31:07.301Z',
      registrationFinishDate: '2001-11-09T17:31:07.301Z',
      languageType: '',
      internshipStatusType: '',
      imageLink: '',
      internshipStacks: [{ technologyStackType: '' }],
      locations: [{ name: '' }],
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
                select
                label="Locations"
                name="locations"
                value={formik.values.location}
                onChange={(value) => formik.setFieldValue('locations', value)}
                helperText="Please select internship location"
                variant="standard"
              >
                {locations.map((item) => (
                  <MenuItem key={item} value={[{ name: `${item.name}` }]}>{item.name}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Stack"
                name="internshipStacks"
                value={formik.values.internshipStacks}
                onChange={(value) => formik.setFieldValue('internshipStacks', value)}
                helperText="Please select internship stack"
                variant="standard"
              >
                {stacks.map((item) => (
                  <MenuItem key={item} value={[{ technologyStackType: `${item.name}` }]}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Language"
                name="languageType"
                value={formik.values.languageType}
                onChange={formik.handleChange}
                helperText="Please select internship language"
                variant="standard"
              >
                {languages.map((item) => (
                  <MenuItem key={item} value={item.name}>{item.name}</MenuItem>
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
