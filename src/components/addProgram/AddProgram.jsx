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

  const dataForRenderDatePicker = [
    // [keyName, label]
    ['startDate', getFieldLabel('addprogram.field.label.startDate')],
    ['endDate', getFieldLabel('addprogram.field.label.endDate')],
    ['registrationStartDate', getFieldLabel('addprogram.field.label.registrationStart')],
    ['registrationFinishDate', getFieldLabel('addprogram.field.label.registrationFinish')],
  ];

  const dataForRenderTextField = [
    // [keyName, label]
    ['name', getFieldLabel('addprogram.field.label.title')],
    ['requirements', getFieldLabel('addprogram.field.label.requirements')],
    ['maxCandidateCount', getFieldLabel('addprogram.field.label.candidateCount')],
  ];

  const dataForRenderSelect = [
    // [keyName, label, array]
    ['internshipStacks', getFieldLabel('addprogram.field.label.stacks'), stacks],
    ['locations', getFieldLabel('addprogram.field.label.locations'), locationsList],
  ];

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box className="container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CardTitle width="100%" title={getFieldLabel('addprogram.title')} />
            <Stack spacing={2} direction="column">
              {dataForRenderTextField.map((item) => (
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
              {dataForRenderDatePicker.map((item) => (
                <React.Fragment key={item[0]}>
                  <MobileDateTimePicker
                    label={item[1]}
                    name={item[0]}
                    value={formik.values[`${item[0]}`]}
                    inputFormat={getFieldLabel('addprogram.input.date.format')}
                    onChange={(date) => formik.setFieldValue(item[0], date)}
                    mask={getFieldLabel('addprogram.input.date.mask')}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </React.Fragment>
              ))}
              {/* eslint-enable react/jsx-props-no-spreading */}
              {dataForRenderSelect.map((element) => (
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
