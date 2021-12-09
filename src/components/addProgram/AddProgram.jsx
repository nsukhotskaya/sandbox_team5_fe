import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
  FormHelperText,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { getFieldLabel } from '../../utils';
import { useMediaDown } from '../utils';
import {
  formValidation,
  dataForRenderTextField,
  dataForRenderDatePicker,
  menuProps,
  formatAdminManager,
  stringToObject,
  formatAllUsers,
  checkDataReceived,
  linkСorrection,
} from '../../constants';
import {
  fetchLocations,
  fetchStacks,
  fetchLanguages,
  fetchAllUsers,
} from '../../store/commands';
import { Confirm } from '../confirm';
import './AddProgram.sass';

const FormValidation = Yup.object().shape(formValidation);

const AddProgram = (props) => {
  const [openCreateConfirm, setOpenCreateConfirm] = useState(false);
  const [openResetConfirm, setOpenResetConfirm] = useState(false);
  const [openCloseConfirm, setOpenCloseConfirm] = useState(false);
  const {
    closeModal,
    initialData,
    dispatchFunction,
    title,
    button,
    internshipData,
  } = props;
  const dispatch = useDispatch();
  const locationsList = useSelector((state) => state.locations.locations);
  const stacksList = useSelector((state) => state.stacks.stacks);
  const languagesList = useSelector((state) => state.languages.languages);
  const allUsersList = useSelector((state) => state.allUsers.allUsers);
  const smallScreen = useMediaDown('sm');

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
  const stacksListFormated = stringToObject(stacksList);
  const allUsersListFormated = formatAllUsers(formatAdminManager(allUsersList));

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: FormValidation,
    onSubmit: (values) => {
      const newInternship = { ...values };
      newInternship.maxCandidateCount = +newInternship.maxCandidateCount;
      if (title === 'addprogram.title') {
        newInternship.locations = newInternship.locations.map((country) => {
          const countryObject = {
            ...locationsList.find((item) => country === item.name),
          };
          return countryObject;
        });
      } else {
        newInternship.locations = newInternship.locations.map((country) => {
          if (initialData.locations.includes(country)) {
            const countryObject = {
              ...locationsList.find((item) => country === item.name),
            };
            return countryObject;
          }
          {
            const countryObject = {
              id: locationsList
                .filter((item) => item.name === country)
                .map((item) => {
                  const temp = item.id;
                  return temp;
                })
                .join(),
            };
            return countryObject;
          }
        });
      }
      if (title === 'addprogram.title') {
        newInternship.internshipStacks = newInternship.internshipStacks.map(
          (stack) => {
            const stackObject = { technologyStackType: stack };
            return stackObject;
          },
        );
      } else {
        newInternship.internshipStacks = newInternship.internshipStacks.map(
          (stack) => {
            if (initialData.internshipStacks.includes(stack)) {
              const stackObject = {
                ...internshipData.internshipStacks.find(
                  (item) => stack === item.technologyStackType,
                ),
              };
              return stackObject;
            }
            {
              const stackObject = { technologyStackType: stack };
              return stackObject;
            }
          },
        );
      }
      if (title === 'addprogram.title') {
        newInternship.languageTypes = newInternship.languageTypes.map(
          (language) => {
            const languageObject = { language };
            return languageObject;
          },
        );
      } else {
        newInternship.languageTypes = newInternship.languageTypes.map(
          (language) => {
            if (initialData.languageTypes.includes(language)) {
              const languageObject = {
                ...internshipData.languageTypes.find(
                  (item) => language === item.language,
                ),
              };
              return languageObject;
            }
            {
              const languageObject = { language };
              return languageObject;
            }
          },
        );
      }
      newInternship.imageLink = linkСorrection(
        newInternship.imageLink,
        'drive.google.com/file/d/',
        'https://drive.google.com/uc?export=view&id=',
      );
      newInternship.spreadSheetId = linkСorrection(
        newInternship.spreadSheetId,
        'docs.google.com',
      );
      newInternship.users = newInternship.users.map((user) => {
        const userObject = {
          ...allUsersList.find((item) => user === item.userName),
        };
        return userObject;
      });
      closeModal();
      dispatch(dispatchFunction(newInternship));
    },
  });

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

  const handleSubmit = (value) => {
    if (value) {
      formik.handleSubmit();
    }
    setOpenCreateConfirm(false);
  };

  const handleReset = (value) => {
    if (value) {
      formik.handleReset();
    }
    setOpenResetConfirm(false);
  };

  const handleClose = (value) => {
    if (value) {
      closeModal();
      formik.handleReset();
    }
    setOpenCloseConfirm(false);
  };

  const handleClickClose = () => {
    setOpenCloseConfirm(true);
  };
  const handleClickCreate = (event) => {
    event.preventDefault();
    setOpenCreateConfirm(true);
  };
  const handleClickReset = () => {
    setOpenResetConfirm(true);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleClickCreate(event);
        }}
      >
        {openCreateConfirm && (
          <Confirm
            confirmTitle={getFieldLabel('submitForm.confirm.message')}
            rejectButtonLabel={getFieldLabel('common.no')}
            acceptButtonLabel={getFieldLabel('common.yes')}
            callback={handleSubmit}
          />
        )}
        {openResetConfirm && (
          <Confirm
            confirmTitle={getFieldLabel('resetForm.confirm.message')}
            rejectButtonLabel={getFieldLabel('common.no')}
            acceptButtonLabel={getFieldLabel('common.yes')}
            callback={handleReset}
          />
        )}
        {openCloseConfirm && (
          <Confirm
            confirmTitle={getFieldLabel('closeForm.confirm.message')}
            rejectButtonLabel={getFieldLabel('common.no')}
            acceptButtonLabel={getFieldLabel('common.yes')}
            callback={handleClose}
          />
        )}
        <Box className={smallScreen ? 'container smallPopUp' : 'container'}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className="popUpHeader">
              <Typography variant={smallScreen ? 'h5' : 'h4'} color="#757575">
                {getFieldLabel(title)}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button onClick={handleClickReset} size="small">
                  {getFieldLabel('common.reset')}
                </Button>
                <IconButton onClick={handleClickClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            <Stack spacing={2} direction="column">
              {Object.values(dataForRenderTextField).map((field) => (
                <TextField
                  label={field.label.concat('*')}
                  name={field.keyName}
                  value={formik.values[`${field.keyName}`]}
                  onChange={formik.handleChange}
                  variant="outlined"
                  key={field.keyName}
                  error={
                    formik.touched[`${field.keyName}`] &&
                    Boolean(formik.errors[`${field.keyName}`])
                  }
                  helperText={
                    formik.touched[`${field.keyName}`] &&
                    formik.errors[`${field.keyName}`]
                  }
                />
              ))}
              {Object.values(dataForRenderDatePicker).map((date) => (
                <React.Fragment key={date.keyName}>
                  <MobileDatePicker
                    label={date.label}
                    name={date.keyName}
                    value={formik.values[`${date.keyName}`]}
                    inputFormat={getFieldLabel('addprogram.input.date.format')}
                    onChange={(dateValue) =>
                      formik.setFieldValue(date.keyName, dateValue)
                    }
                    mask={getFieldLabel('addprogram.input.date.mask')}
                    renderInput={({ label, inputProps }) => (
                      <TextField label={label} inputProps={inputProps} />
                    )}
                    minDate={new Date()}
                  />
                </React.Fragment>
              ))}
              {isDataReceived &&
                Object.values(dataForRenderSelect).map((select) => (
                  <FormControl
                    key={select.keyName}
                    error={
                      formik.touched[`${select.keyName}`] &&
                      Boolean(formik.errors[`${select.keyName}`])
                    }
                  >
                    <InputLabel>{select.label.concat('*')}</InputLabel>
                    <Select
                      label={select.label.concat('*')}
                      multiple
                      value={formik.values[`${select.keyName}`]}
                      onChange={(event) =>
                        formik.setFieldValue(select.keyName, event.target.value)
                      }
                      error={
                        formik.touched[`${select.keyName}`] &&
                        Boolean(formik.errors[`${select.keyName}`])
                      }
                      MenuProps={menuProps}
                    >
                      {select.array.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText error>
                      {formik.touched[`${select.keyName}`] &&
                        formik.errors[`${select.keyName}`]}
                    </FormHelperText>
                  </FormControl>
                ))}
            </Stack>
          </LocalizationProvider>
        </Box>
        <Box
          className={smallScreen ? 'buttonWrapper smallPopUp' : 'buttonWrapper'}
        >
          <Button variant="contained" type="submit">
            {getFieldLabel(button)}
          </Button>
          <Button variant="outlined" onClick={handleClickClose}>
            {getFieldLabel('common.cancel')}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddProgram;
