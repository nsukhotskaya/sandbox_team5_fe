import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Box,
  Stack,
  Button,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CardTitle } from '../cardTitle';
import { getFieldLabel } from '../../utils';
import { fetchLocations } from '../../store/commands';
import { languages, stacks } from '../../mocks/createInternshipData.json';
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddProgram = (props) => {
  const locationsList = useSelector((state) => state.locations.locations);
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
      internshipStacks: [],
      locations: [],
    },
    onSubmit: (values) => {
      const newInternship = { ...values };
      const locationsObjects = newInternship.locations.map((country) => {
        const countryObject = { name: country };
        return countryObject;
      });
      newInternship.locations = locationsObjects;
      const stacksObjects = newInternship.internshipStacks.map((stack) => {
        const stackObject = { technologyStackType: stack };
        return stackObject;
      });
      newInternship.internshipStacks = stacksObjects;
      console.log(JSON.stringify(newInternship, null, 2));
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
                  key={item[0]}
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
                {languages.map((item) => (
                  <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
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
              <FormControl>
                <InputLabel>Stacks</InputLabel>
                <Select
                  label="Stacks"
                  multiple
                  value={formik.values.internshipStacks}
                  onChange={(event) => formik.setFieldValue('internshipStacks', event.target.value)}
                  MenuProps={MenuProps}
                >
                  {stacks.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Locations</InputLabel>
                <Select
                  label="Locations"
                  multiple
                  value={formik.values.locations}
                  onChange={(event) => formik.setFieldValue('locations', event.target.value)}
                  MenuProps={MenuProps}
                >
                  {locationsList.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
