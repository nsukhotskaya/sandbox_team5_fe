import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Box, Typography, Divider, Grid } from '@mui/material';
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

  const formatedInfo = formatInfo(candidateInfo);

  return (
    <Box padding="2% 2% 0% 3%">
      <Box
        marginLeft="3%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography variant="h4">
          {`${formatedInfo.firstName} ${formatedInfo.lastName}`}
        </Typography>
        <CandidateInfoEdit candidateInfo={formatedInfo} />
      </Box>

      <Divider />

      <Grid container spacing={2} margin="0 0 0 2%" width="100%">
        {tableCandidateInfoFields.map((item) => (
          <Grid key={item} item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography variant="h6">
              {getFieldLabel(`candidate.info.${item}`)}
            </Typography>
            <Typography variant="body1" maxWidth="100%">
              {formatedInfo[item]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CandidateInfo;
