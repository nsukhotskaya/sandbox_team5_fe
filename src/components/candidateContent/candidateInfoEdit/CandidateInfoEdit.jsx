import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
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
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDayJs from '@mui/lab/AdapterDayjs';

import { getFieldLabel } from '../../../utils';
import {
  fetchCandidateStatusTypes,
  fetchEnglishLevel,
  fetchLanguages,
  fetchLocations,
  updateCandidateInfo,
  fetchInternships,
  fetchStacksByInternshipId,
} from '../../../store/commands';

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

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
  const stacksList = useSelector(
    (state) => state.stacksByInternshipId.stacksByInternshipId,
  );

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(candidateInfo, 'internshipId')) {
      dispatch(fetchCandidateStatusTypes());
      dispatch(fetchEnglishLevel());
      dispatch(fetchLanguages());
      dispatch(fetchLocations());
      dispatch(fetchInternships());
      dispatch(fetchStacksByInternshipId(candidateInfo.internshipId));
    }
  }, []);

  const stringToObject = (array) =>
    array.map((item, index) => ({
      id: index,
      name: item,
    }));

  const adaptStacks = (list) =>
    list.map((item) => ({
      id: item.id,
      name: item.technologyStackType,
    }));

  const formatInfo = (info) => {
    const initInfo = { ...info };
    initInfo.registrationDate = dayjs.utc(
      initInfo.registrationDate,
      'DD/MM/YYYY HH:mm',
    );

    initInfo.bestContactTime = dayjs.utc(initInfo.bestContactTime, 'HH:mm');
    initInfo.isPlanningToJoin = true;

    return initInfo;
  };

  const formatedInitInfo = formatInfo(candidateInfo);
  const englishLevelListFormated = stringToObject(englishLevelList);
  const statusTypeListFormated = stringToObject(candidateStatusTypeList);
  const languagesListFormated = stringToObject(languagesList);
  const locationsListFormated = stringToObject(locationsList);
  const stacksListAdapted = adaptStacks(stacksList);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const dataForRenderTextField = {
    firstNameData: {
      keyName: 'firstName',
      label: getFieldLabel('candidate.info.firstName'),
    },
    secondNameData: {
      keyName: 'lastName',
      label: getFieldLabel('candidate.info.lastName'),
    },
    educationData: {
      keyName: 'education',
      label: getFieldLabel('candidate.info.education'),
    },
    emailData: {
      keyName: 'email',
      label: getFieldLabel('candidate.info.email'),
    },
    internshipIdData: {
      keyName: 'internshipId',
      label: getFieldLabel('candidate.info.internshipId'),
    },
    currentJobData: {
      keyName: 'currentJob',
      label: getFieldLabel('candidate.info.currentJob'),
    },
    linksData: {
      keyName: 'links',
      label: getFieldLabel('candidate.info.links'),
    },
    otherInfoData: {
      keyName: 'otherInfo',
      label: getFieldLabel('candidate.info.otherInfo'),
    },
    professionalCertificatesData: {
      keyName: 'professionalCertificates',
      label: getFieldLabel('candidate.info.professionalCertificates'),
    },
    phoneData: {
      keyName: 'phone',
      label: getFieldLabel('candidate.info.phone'),
    },
    skypeData: {
      keyName: 'skype',
      label: getFieldLabel('candidate.info.skype'),
    },
    testTaskEvaluation: {
      keyName: 'testTaskEvaluation',
      label: getFieldLabel('candidate.info.testTaskEvaluation'),
    },
    isPlanningToJoin: {
      keyName: 'isPlanningToJoin',
      label: getFieldLabel('candidate.info.isPlanningToJoin'),
    },
  };

  const dataForRenderSelect = {
    status: {
      keyName: 'statusType',
      label: getFieldLabel('candidate.info.statusType'),
      array: statusTypeListFormated,
    },
    englishLevelType: {
      keyName: 'englishLevelType',
      label: getFieldLabel('candidate.info.englishLevelType'),
      array: englishLevelListFormated,
    },
    languagesData: {
      keyName: 'languageType',
      label: getFieldLabel('candidate.info.languageType'),
      array: languagesListFormated,
    },
    locationsData: {
      keyName: 'location',
      label: getFieldLabel('candidate.info.location'),
      array: locationsListFormated,
    },
    stacksData: {
      keyName: 'stackType',
      label: getFieldLabel('candidate.info.stackType'),
      array: stacksListAdapted,
    },
  };

  const formik = useFormik({
    initialValues: formatedInitInfo,
    onSubmit: (values) => {
      dispatch(updateCandidateInfo(values));
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayJs}>
      <form>
        <Box>
          <Button variant="outlined" onClick={handleClickOpen}>
            {getFieldLabel('common.edit')}
          </Button>
          <Drawer anchor="left" open={open}>
            <Box
                position="sticky"
                top = "0px"
                height="auto"
                padding="20px"
                backgroundColor="background.paper"
                zIndex="2"
                boxShadow="0px -4px 10px 0px #c9c9c9"
                width="100%"
                display="flex"
                justifyContent="space-between"
            >
              <Typography variant="h4" color="gray">
                {getFieldLabel('candidate.edit.editCandidateTitle')}
              </Typography>
              <IconButton onClick={handleClose}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <Box width="50vw" padding="20px">
                <Stack spacing={2} direction="column">
                  {Object.values(dataForRenderTextField).map((item) => (
                    <TextField
                      fullWidth
                      value={formik.values[item.keyName]}
                      onChange={formik.handleChange}
                      name={item.keyName}
                      label={item.label}
                      key={item.keyName}
                    />
                  ))}

                  {Object.values(dataForRenderSelect).map((select) => (
                    <FormControl key={select.keyName}>
                      <InputLabel>{select.label}</InputLabel>
                      <Select
                        key={select.keyName}
                        fullWidth
                        value={formik.values[select.keyName]}
                        name={select.keyName}
                        label={select.label}
                        onChange={(event) =>
                          formik.setFieldValue(
                            select.keyName,
                            event.target.value,
                          )
                        }
                      >
                        {select.array.map((item) => (
                          <MenuItem key={item.id} value={item.name}>
                            {item.name};
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
                      }}
                      name="internshipName"
                      label={getFieldLabel('candidate.info.internshipName')}
                    >
                      {Object.values(internshipsList).map((item) => (
                        <MenuItem id={item.id} value={item.name} key={item.id}>
                          {item.name};
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TimePicker
                    label={getFieldLabel('candidate.info.bestContactTime')}
                    name="bestContactTime"
                    value={formik.values.bestContactTime}
                    onChange={(dateValue) =>
                      formik.setFieldValue('bestContactTime', dateValue)
                    }
                    ampm={false}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    renderInput={(params) => <TextField {...params} />}
                  />
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
                <Button variant="contained" type="submit" onClick={handleClose}>
                  {getFieldLabel('common.save')}
                </Button>
                <Button variant="contained" onClick={handleClose}>
                  {getFieldLabel('common.close')}
                </Button>
              </Box>
            </form>
          </Drawer>
        </Box>
      </form>
    </LocalizationProvider>
  );
};

export default CandidateInfoEdit;
