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
  Typography,
} from '@mui/material';
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
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
    },
  });

  const dataForRenderDatePicker = {
    startData: {
      keyName:'startDate',
      label:getFieldLabel('addprogram.field.label.startDate'),
    },
    endData: {
      keyName:'endDate',
      label:getFieldLabel('addprogram.field.label.endDate'),
    },
    registrationStartData: {
      keyName:'registrationStartDate',
      label:getFieldLabel('addprogram.field.label.registrationStart'),
    },
    registrationFinishData: {
      keyName:'registrationFinishDate',
      label:getFieldLabel('addprogram.field.label.registrationFinish'),
    },
  };

  const dataForRenderTextField = {
    titleData: {
      keyName: 'name',
      label: getFieldLabel('addprogram.field.label.title'),
    },
    requirementsData: {
      keyName: 'requirements',
      label: getFieldLabel('addprogram.field.label.requirements'),
    },
    maxCandidateCountData: {
      keyName: 'maxCandidateCount',
      label: getFieldLabel('addprogram.field.label.candidateCount'),
    },
  };

  const dataForRenderSelect = { 
    stackData: {
      keyName: 'internshipStacks',
      label: getFieldLabel('addprogram.field.label.stacks'),
      array: stacks,
    },
    locationData: {
      keyName: 'locations',
      label: getFieldLabel('addprogram.field.label.locations'),
      array: locationsList,
    },
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box className="container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography variant="h4" width="100%" component="div" gutterBottom color="#222">
              {getFieldLabel('addprogram.title')}
            </Typography>
            <Stack spacing={2} direction="column">
              {Object.values(dataForRenderTextField).map((field) => (
                <TextField
                  label={field.label}
                  name={field.keyName}
                  value={formik.values[`${field.keyName}`]}
                  onChange={formik.handleChange}
                  variant="outlined"
                  key={field.keyName}
                />
              ))}
              <TextField
                select
                label={getFieldLabel('addprogram.field.label.languages')}
                name="languageType"
                value={formik.values.languageType}
                onChange={formik.handleChange}
                variant="standard"
              >
                {languages.map((item) => (
                  <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                ))}
              </TextField>
              {/* eslint-disable react/jsx-props-no-spreading */}
              {Object.values(dataForRenderDatePicker).map((date) => (
                <React.Fragment key={date.keyName}>
                  <MobileDateTimePicker
                    label={date.label}
                    name={date.keyName}
                    value={formik.values[`${date.keyName}`]}
                    inputFormat={getFieldLabel('addprogram.input.date.format')}
                    onChange={(dateValue) => formik.setFieldValue(date.keyName, dateValue)}
                    mask={getFieldLabel('addprogram.input.date.mask')}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </React.Fragment>
              ))}
              {/* eslint-enable react/jsx-props-no-spreading */}
              { Object.values(dataForRenderSelect).map((select) => (
                <FormControl key={select.keyName}>
                <InputLabel>{select.label}</InputLabel>
                <Select
                  label={select.label}
                  multiple
                  value={formik.values[`${select.keyName}`]}
                  onChange={(event) => formik.setFieldValue(select.keyName, event.target.value)}
                  MenuProps={MenuProps}
                >
                  {select.array.map((item) => (
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
