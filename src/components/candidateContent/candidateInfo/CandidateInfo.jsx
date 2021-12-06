import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Box, Typography, Divider, Grid, Chip } from '@mui/material';
import { getFieldLabel } from '../../../utils';

import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';

import { CandidateInfoEdit } from '../index';

const utc = require('dayjs/plugin/utc');

const CandidateInfo = (props) => {
  const { candidateInfo } = props;

  dayjs.extend(customParseFormat);
  dayjs.extend(utc);

  const formatInfo = (info) => {
    const newInfo = { ...info };
    newInfo.registrationDate = dayjs(info.registrationDate).format(
      'DD/MM/YYYY HH:mm',
    );
    newInfo.bestContactTime = dayjs(info.bestContactTime).format('HH:mm');
    newInfo.isPlanningToJoin = newInfo.isPlanningToJoin ? 'Yes' : 'No';
    return newInfo;
  };

  const getChipColor = (statusType) => {
    switch (statusType) {
      case 'New':
        return 'secondary';
      case 'HR_Review':
      case 'Interview_Review':
      case 'TestTask':
        return 'primary';
      case 'Pending':
        return 'default';
      case 'Accepted':
      case 'Graduated':
        return 'success';
      case 'Questionable':
        return 'warning';
      default:
        return 'error';
    }
  };

  const formatedInfo = formatInfo(candidateInfo);

  return (
    <Box padding="2% 2% 0% 3%">
      <Box
        marginLeft="3%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row">
          <Typography variant="h4" fontWeight="300" marginRight="10px">
            {`${formatedInfo.firstName} ${formatedInfo.lastName}`}
          </Typography>
          <CandidateInfoEdit candidateInfo={formatedInfo} />
        </Box>
        <Chip
          label={formatedInfo.statusType}
          color={getChipColor(formatedInfo.statusType)}
          size="medium"
          variant="outlined"
        />
      </Box>

      <Divider />

      <Grid container spacing={2} margin="0 0 0 2%" width="100%">
        {tableCandidateInfoFields.map((item) => (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={item}>
            <Typography variant="body1" fontWeight="bold">
              {getFieldLabel(`candidate.info.${item}`)}
            </Typography>
            <Typography variant="body2" maxWidth="100%">
              {formatedInfo[item]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CandidateInfo;
