import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  Box,
  Button,
  Drawer,
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { LocalizationProvider, MobileTimePicker } from '@mui/lab';
import AdapterDayJs from '@mui/lab/AdapterDayjs';
import { candidateEditValidation } from '../../../constants';
import { getFieldLabel } from '../../../utils';
import {
  fetchCandidateStatusTypes,
  fetchEnglishLevel,
  fetchLanguages,
  fetchLocations,
  updateCandidateInfo,
  fetchInternships,
} from '../../../store/commands';

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

const FormValidation = Yup.object().shape(candidateEditValidation);

export const CandidateInfoEdit = (props) => {
  const { candidateInfo } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
  const candidateStatusTypeList = useSelector(
    (state) => state.candidateStatusTypes.candidateStatusTypes,
  );
  const englishLevelList = useSelector(
    (state) => state.englishLevels.englishLevels,
  );
  const languagesList = useSelector((state) => state.languages.languages);
  const locationsList = useSelector((state) => state.locations.locations);
  const internshipsList = useSelector((state) => state.internships.internships);

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(candidateInfo, 'internshipId')) {
      dispatch(fetchCandidateStatusTypes());
      dispatch(fetchEnglishLevel());
      dispatch(fetchLanguages());
      dispatch(fetchLocations());
      dispatch(fetchInternships());
    }
  }, []);

  const stringToObject = (array) =>
    array.map((item, index) => ({
      id: index,
      name: item,
    }));

  const formatInfo = (info) => {
    const initInfo = { ...info };
    initInfo.isPlanningToJoin = initInfo.isPlanningToJoin.includes('Yes');
    initInfo.registrationDate = dayjs.utc(
      initInfo.registrationDate,
      'DD/MM/YYYY HH:mm',
    );

    initInfo.bestContactTime = dayjs.utc(initInfo.bestContactTime, 'HH:mm');

    return initInfo;
  };

  const formatedInitInfo = formatInfo(candidateInfo);
  const englishLevelListFormated = stringToObject(englishLevelList);
  const statusTypeListFormated = stringToObject(candidateStatusTypeList);
  const languagesListFormated = stringToObject(languagesList);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getInternshipStackTypesArray = (index) =>
    internshipsList.find((internship) => internship.id === index)
      ?.internshipStacks ?? [];

  const dataForRenderTextField = [
    'firstName',
    'lastName',
    'education',
    'email',
    'currentJob',
    'links',
    'otherInfo',
    'professionalCertificates',
    'phone',
    'skype',
  ];

  const dataForRenderSelect = [
    {
      keyName: 'statusType',
      array: statusTypeListFormated,
    },
    {
      keyName: 'englishLevelType',
      array: englishLevelListFormated,
    },
    {
      keyName: 'languageType',
      array: languagesListFormated,
    },
    {
      keyName: 'location',
      array: locationsList,
    },
  ];

  const formik = useFormik({
    initialValues: formatedInitInfo,
    validationSchema: FormValidation,
    onSubmit: (values) => {
      dispatch(updateCandidateInfo(values));
      setOpen(false);
    },
  });

  const handleClose = () => {
    formik.handleReset();
    setOpen(false);
  };

  const handleReset = () => {
    formik.handleReset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayJs}>
      <Box>
        <IconButton variant="outlined" onClick={handleClickOpen}>
          <EditIcon fontSize="medium" />
        </IconButton>
        <Drawer anchor="left" open={open}>
          <Box
            position="sticky"
            top="0px"
            height="auto"
            padding="20px"
            backgroundColor="background.paper"
            zIndex="2"
            boxShadow="0px -4px 10px 0px #c9c9c9"
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="h4" color="gray">
              {getFieldLabel('candidate.edit.editCandidateTitle')}
            </Typography>
            <Box>
              <Button
                onClick={handleReset}
                size="small"
                disabled={
                  JSON.stringify(formatedInitInfo) ===
                  JSON.stringify(formik.values)
                }
              >
                {getFieldLabel('common.reset')}
              </Button>
              <IconButton onClick={handleClose}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Box
              padding="20px"
              width={{ lg: '35vw', md: '50vw', sm: '70vw', xs: '100vw' }}
            >
              <Stack spacing={2} direction="column">
                {dataForRenderTextField.map((fieldName) => (
                  <TextField
                    fullWidth
                    value={formik.values[fieldName]}
                    onChange={formik.handleChange}
                    name={fieldName}
                    label={getFieldLabel(`candidate.info.${fieldName}`)}
                    key={fieldName}
                    error={
                      formik.touched[`${fieldName}`] &&
                      Boolean(formik.errors[`${fieldName}`])
                    }
                    helperText={
                      formik.touched[`${fieldName}`] &&
                      formik.errors[`${fieldName}`]
                    }
                  />
                ))}
                {dataForRenderSelect.map(({ keyName, array }) => (
                  <FormControl key={keyName}>
                    <InputLabel>
                      {getFieldLabel(`candidate.info.${keyName}`)}
                    </InputLabel>
                    <Select
                      key={keyName}
                      fullWidth
                      value={formik.values[keyName]}
                      name={keyName}
                      label={getFieldLabel(`candidate.info.${keyName}`)}
                      onChange={(event) =>
                        formik.setFieldValue(keyName, event.target.value)
                      }
                    >
                      {array.map(({ id, name }) => (
                        <MenuItem key={id} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ))}
                <FormControl>
                  <InputLabel>
                    {getFieldLabel('candidate.info.internshipName')}
                  </InputLabel>
                  <Select
                    fullWidth
                    value={formik.values.internshipName}
                    onChange={(event, child) => {
                      formik.setFieldValue(
                        'internshipName',
                        event.target.value,
                      );
                      formik.setFieldValue('internshipId', child.props.id);
                      formik.setFieldValue(
                        'stackType',
                        getInternshipStackTypesArray(child.props.id)[0]
                          .technologyStackType,
                      );
                    }}
                    name="internshipName"
                    label={getFieldLabel('candidate.info.internshipName')}
                  >
                    {Object.values(internshipsList).map((item) => (
                      <MenuItem id={item.id} value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel>
                    {getFieldLabel('candidate.info.stackType')}
                  </InputLabel>
                  <Select
                    fullWidth
                    value={formik.values.stackType}
                    onChange={(event) =>
                      formik.setFieldValue('stackType', event.target.value)
                    }
                    name="stackType"
                    label={getFieldLabel('candidate.info.stackType')}
                  >
                    {getInternshipStackTypesArray(
                      formik.values.internshipId,
                    ).map((item) => (
                      <MenuItem
                        id={item.id}
                        value={item.technologyStackType}
                        key={item.id}
                      >
                        {item.technologyStackType}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <MobileTimePicker
                  label={getFieldLabel('candidate.info.bestContactTime')}
                  name="bestContactTime"
                  value={formik.values.bestContactTime}
                  onChange={(dateValue) =>
                    formik.setFieldValue('bestContactTime', dateValue)
                  }
                  ampm={false}
                  renderInput={(params) => <TextField {...params} />}
                />
                <FormControl fullWidth>
                  <FormControlLabel
                    label={getFieldLabel('candidate.info.isPlanningToJoin')}
                    control={<Checkbox />}
                    name="isPlanningToJoin"
                    onChange={formik.handleChange}
                    checked={formik.values.isPlanningToJoin}
                    value={formik.values.isPlanningToJoin}
                  />
                </FormControl>
              </Stack>
            </Box>
            <Box
              position="sticky"
              bottom="0px"
              height="auto"
              padding="20px"
              backgroundColor="background.paper"
              zIndex="1"
              boxShadow="0px -4px 10px 0px #c9c9c9"
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Button variant="contained" type="submit" fullWidth>
                {getFieldLabel('common.save')}
              </Button>
            </Box>
          </form>
        </Drawer>
      </Box>
    </LocalizationProvider>
  );
};

export default CandidateInfoEdit;
