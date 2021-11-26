/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
import { DateTimePicker, LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { getFieldLabel } from '../../../utils';
import {
  fetchCandidateStatusTypes,
  fetchEnglishLevels,
  updateCandidateInfo,
} from '../../../store/commands';

const checkDataReceived = (...arrays) =>
  arrays.every((array) => array.length !== 0);

export const CandidateInfoEdit = (props) => {
  const { candidateInfo } = props;
  const [open, setOpen] = React.useState(false);

  dayjs.extend(customParseFormat);

  const dispatch = useDispatch();

  const candidateStatusTypeList = useSelector(
    (state) => state.candidateStatusTypes.candidateStatusTypes,
  );
  const englishLevelList = useSelector(
    (state) => state.englishLevelType.englishLevelType,
  );

  const isDataReceived = checkDataReceived(
    candidateStatusTypeList,
    englishLevelList,
  );

  useEffect(() => {
    if (!isDataReceived) {
      dispatch(fetchCandidateStatusTypes());
      dispatch(fetchEnglishLevels());
    }
  }, [isDataReceived]);

  const stringToObject = (array) =>
    array.map((item, index) => ({
      id: index,
      name: item,
    }));

  const englishLevelListFormated = stringToObject(englishLevelList);

  const initInfo = { ...candidateInfo };

  const handleClickOpen = () => {
    initInfo.registrationDate = dayjs(
      initInfo.registrationDate,
      'DD/MM/YYYY HH:mm',
    );
    initInfo.bestContactTime = dayjs(initInfo.bestContactTime, 'HH:mm');
    console.log(initInfo);
    initInfo.isPlanningToJoin = true;

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
    location: {
      keyName: 'location',
      label: getFieldLabel('candidate.info.location'),
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
    // status: {
    //   keyName: 'statusType',
    //   label: getFieldLabel('candidate.info.statusType'),
    // },
    // stack: {
    //   keyName: 'stackType',
    //   label: getFieldLabel('candidate.info.stackType'),
    // },
    englishLevelType: {
      keyName: 'englishLevelType',
      label: getFieldLabel('candidate.info.englishLevelName'),
      array: englishLevelListFormated,
    },
  };

  const formik = useFormik({
    initialValues: initInfo,
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateCandidateInfo(values));
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form>
        <Box width="200px" backgroundColor="primary.main">
          <Button variant="contained" onClick={handleClickOpen}>
            Open form dialog
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
                      value={formik.values.englishLevelType}
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
                  <DateTimePicker
                    label="Registration date"
                    name="registrationDate"
                    value={formik.values.registrationDate}
                    onChange={(dateValue) =>
                      formik.setFieldValue('registrationDate', dateValue)
                    }
                    ampm={false}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    renderInput={(params) => <TextField {...params} />}
                  />
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
