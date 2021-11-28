/* eslint-disable no-unused-vars */
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
} from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDayJs from '@mui/lab/AdapterDayjs';

import { getFieldLabel } from '../../../utils';
import {
  fetchCandidateStatusTypes,
  fetchEnglishLevels,
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

  dayjs.extend(customParseFormat);
  dayjs.extend(utc);

  const dispatch = useDispatch();

  const candidateStatusTypeList = useSelector(
    (state) => state.candidateStatusTypes.candidateStatusTypes,
  );
  const englishLevelList = useSelector(
    (state) => state.englishLevelType.englishLevelType,
  );
  const languagesList = useSelector((state) => state.languages.languages);
  const locationsList = useSelector((state) => state.locations.locations);
  const internshipsList = useSelector((state) => state.internships.internships);

  const stacksList = useSelector(
    (state) => state.stacksByInternshipId.stacksByInternshipId,
  );

  useEffect(() => {
    dispatch(fetchCandidateStatusTypes());
    dispatch(fetchEnglishLevels());
    dispatch(fetchLanguages());
    dispatch(fetchLocations());
    dispatch(fetchInternships());
    dispatch(fetchStacksByInternshipId(candidateInfo.internshipId));
  }, []);

  const stringToObject = (array) =>
    array.map((item, index) => ({
      id: index,
      name: item,
    }));

  const englishLevelListFormated = stringToObject(englishLevelList);
  const statusTypeListFormated = stringToObject(candidateStatusTypeList);
  const languagesListFormated = stringToObject(languagesList);

  const formatList = (list) => {
    const formatedList = list.map((stack) => {
      // eslint-disable-next-line no-param-reassign
      stack.name = stack.technologyStackType;
      return stack;
    });

    return formatedList;
  };

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

  const handleClickOpen = () => {
    console.log(formatedInitInfo);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      label: getFieldLabel('candidate.info.englishLevelName'),
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
      array: locationsList,
    },
    stacksData: {
      keyName: 'stackType',
      label: getFieldLabel('candidate.info.stackType'),
      array: formatList(stacksList),
    },
  };

  const formik = useFormik({
    initialValues: formatedInitInfo,
    onSubmit: (values) => {
      console.log(values);
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
            <form onSubmit={formik.handleSubmit}>
              <Box width="50vw">
                <Stack spacing={2} direction="column">
                  {Object.values(dataForRenderTextField).map((item) => (
                    <TextField
                      fullWidth
                      value={formik.values[item.keyName]}
                      onChange={formik.handleChange}
                      name={item.keyName}
                      label={item.label}
                    />
                  ))}

                  {Object.values(dataForRenderSelect).map((select) => (
                    <Select
                      fullWidth
                      value={formik.values[select.keyName]}
                      onChange={(event) =>
                        formik.setFieldValue(select.keyName, event.target.value)
                      }
                      name={select.keyName}
                      label={select.label}
                    >
                      {select.array.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                          {item.name};
                        </MenuItem>
                      ))}
                    </Select>
                  ))}
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
                    label="Internship name"
                  >
                    {Object.values(internshipsList).map((item) => (
                      <MenuItem id={item.id} value={item.name}>
                        {item.name};
                      </MenuItem>
                    ))}
                  </Select>

                  <TimePicker
                    label="Best contact time"
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
                <Button variant="contained" type="submit" onClick={handleClose}>
                  Submit
                </Button>
                <Button variant="contained" onClick={handleClose}>
                  Close
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
