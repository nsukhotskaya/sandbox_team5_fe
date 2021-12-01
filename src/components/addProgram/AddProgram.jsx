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
import { LocalizationProvider, MobileDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { getFieldLabel } from '../../utils';
import {
  fetchLocations,
  fetchStacks,
  fetchLanguages,
  fetchAllUsers,
  createNewInternship,
} from '../../store/commands';
import { initialValues } from '../../mocks/createInternshipData.json';
import './AddProgram.sass';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

const stringToObject = (array) =>
  array.map((item, index) => ({
    id: index,
    name: item,
  }));

const formatStacks = (array) =>
  array.map((item) => ({
    id: item.id,
    name: item.technologyStackType,
  }));

const formatAllUsers = (array) =>
  array.map((item) => ({
    id: item.id,
    name: item.userName,
  }));

const checkDataReceived = (...arrays) =>
  arrays.every((array) => array.length !== 0);

const AddProgram = (props) => {
  const { closeModal } = props;
  const dispatch = useDispatch();

  const locationsList = useSelector((state) => state.locations.locations);
  const stacksList = useSelector((state) => state.stacks.stacks);
  const languagesList = useSelector((state) => state.languages.languages);
  const allUsersList = useSelector((state) => state.allUsers.allUsers);

  const isDataReceived = checkDataReceived(
    locationsList,
    stacksList,
    languagesList,
    allUsersList,
  );

  useEffect(() => {
    if (!isDataReceived) {
      dispatch(fetchLocations());
      dispatch(fetchStacks());
      dispatch(fetchLanguages());
      dispatch(fetchAllUsers());
    }
  }, [isDataReceived]);

  const languagesListFormated = stringToObject(languagesList);
  const stacksListFormated = formatStacks(stacksList);
  const allUsersListFormated = formatAllUsers(allUsersList);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newInternship = { ...values };
      newInternship.maxCandidateCount = +newInternship.maxCandidateCount;
      newInternship.locations = newInternship.locations.map((country) => {
        const countryObject = { name: country };
        return countryObject;
      });
      newInternship.internshipStacks = newInternship.internshipStacks.map(
        (stack) => {
          const stackObject = { technologyStackType: stack };
          return stackObject;
        },
      );
      newInternship.languageTypes = newInternship.languageTypes.map(
        (language) => {
          const languageObject = { language };
          return languageObject;
        },
      );
      // newInternship.users = newInternship.users.map(
      //   (user) => {
      //     const userObject = {...allUsersList.find((item) => {
      //       if (user === item.userName){
      //         return true
      //       }
      //       return false
      //     })}
      //     return userObject;
      //   },
      // );
      newInternship.users = [];
      dispatch(createNewInternship(newInternship));
    },
  });

  const dataForRenderDatePicker = {
    startData: {
      keyName: 'startDate',
      label: getFieldLabel('addprogram.field.label.startDate'),
    },
    endData: {
      keyName: 'endDate',
      label: getFieldLabel('addprogram.field.label.endDate'),
    },
    registrationStartData: {
      keyName: 'registrationStartDate',
      label: getFieldLabel('addprogram.field.label.registrationStart'),
    },
    registrationFinishData: {
      keyName: 'registrationFinishDate',
      label: getFieldLabel('addprogram.field.label.registrationFinish'),
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
    spreadSheetId: {
      keyName: 'spreadSheetId',
      label: getFieldLabel('addprogram.field.label.spreadSheetId'),
    },
    imageLink: {
      keyName: 'imageLink',
      label: getFieldLabel('addprogram.field.label.imageLink'),
    },
  };

  const dataForRenderSelect = {
    stackData: {
      keyName: 'internshipStacks',
      label: getFieldLabel('addprogram.field.label.stacks'),
      array: stacksListFormated,
    },
    locationData: {
      keyName: 'locations',
      label: getFieldLabel('addprogram.field.label.locations'),
      array: locationsList,
    },
    languagesData: {
      keyName: 'languageTypes',
      label: getFieldLabel('addprogram.field.label.languages'),
      array: languagesListFormated,
    },
    allUsersData: {
      keyName: 'users',
      label: getFieldLabel('addprogram.field.label.allUsers'),
      array: allUsersListFormated,
    },
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box className="container">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography
              variant="h4"
              width="100%"
              component="div"
              gutterBottom
              color="#757575"
            >
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
              {/* eslint-disable react/jsx-props-no-spreading */}
              {Object.values(dataForRenderDatePicker).map((date) => (
                <React.Fragment key={date.keyName}>
                  <MobileDateTimePicker
                    label={date.label}
                    name={date.keyName}
                    value={formik.values[`${date.keyName}`]}
                    inputFormat={getFieldLabel('addprogram.input.date.format')}
                    onChange={(dateValue) =>
                      formik.setFieldValue(date.keyName, dateValue)
                    }
                    mask={getFieldLabel('addprogram.input.date.mask')}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </React.Fragment>
              ))}
              {/* eslint-enable react/jsx-props-no-spreading */}
              {isDataReceived &&
                Object.values(dataForRenderSelect).map((select) => (
                  <FormControl key={select.keyName}>
                    <InputLabel>{select.label}</InputLabel>
                    <Select
                      label={select.label}
                      multiple
                      value={formik.values[`${select.keyName}`]}
                      onChange={(event) =>
                        formik.setFieldValue(select.keyName, event.target.value)
                      }
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
            {getFieldLabel('common.create')}
          </Button>
          <Button variant="outlined" onClick={closeModal}>
            {getFieldLabel('common.cancel')}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddProgram;
