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
import { languages, stacks, initialValues } from '../../mocks/createInternshipData.json';
import './AddProgram.sass';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

const AddProgram = (props) => {
  const { closeModal } = props;
  const locationsList = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newInternship = { ...values };
      newInternship.locations = newInternship.locations.map((country) => {
        const countryObject = { name: country };
        return countryObject;
      });
      newInternship.internshipStacks = newInternship.internshipStacks.map((stack) => {
        const stackObject = { technologyStackType: stack };
        return stackObject;
      });

      console.log(JSON.stringify(newInternship, null, 2));
    },
  });

  const dateFieldsArray = [
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

  const multiSelectFieldsArray = [
    // [key, label, array]
    ['internshipStacks', 'Stacks', stacks],
    ['locations', 'Locations', locationsList],
  ];

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
              {dateFieldsArray.map((item) => (
                <MobileDateTimePicker
                  key={item[0]}
                  label={item[1]}
                  name={item[0]}
                  value={formik.values[`${item[0]}`]}
                  inputFormat="yyyy/MM/dd hh:mm a"
                  onChange={(date) => formik.setFieldValue(item[0], date)}
                  mask="___/__/__ __:__ _M"
                  renderInput={(params) => <TextField {...params} />}
                />
              ))}
              {/* eslint-enable react/jsx-props-no-spreading */}
              {multiSelectFieldsArray.map((element) => (
                <FormControl key={element[0]}>
                  <InputLabel>{element[1]}</InputLabel>
                  <Select
                    label={element[1]}
                    multiple
                    value={formik.values[`${element[0]}`]}
                    onChange={(event) => formik.setFieldValue(element[0], event.target.value)}
                    MenuProps={MenuProps}
                  >
                    {element[2].map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
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
