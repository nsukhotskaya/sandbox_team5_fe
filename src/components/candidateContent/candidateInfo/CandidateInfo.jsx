import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Box, Typography, Divider, Grid, Chip, Link } from '@mui/material';
import { getFieldLabel, getChipColorByStatus } from '../../../utils';

import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';

import { CandidateInfoEdit } from '../index';

const utc = require('dayjs/plugin/utc');

const CandidateInfo = (props) => {
  const { candidateInfo } = props;
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );

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
        <Box display="flex" flexDirection="row">
          <Typography variant="h4" fontWeight="300" marginRight="10px">
            {`${formatedInfo.firstName} ${formatedInfo.lastName}`}
          </Typography>
          {authorizedUserRole !== 'Interviewer' &&
            authorizedUserRole !== 'Mentor' && (
              <CandidateInfoEdit candidateInfo={formatedInfo} />
            )}
        </Box>
        <Chip
          label={formatedInfo.statusType}
          color={getChipColorByStatus(formatedInfo.statusType)}
          size="medium"
          variant="outlined"
        />
      </Box>

      <Divider />

      <Grid
        container
        spacing={2}
        margin="0 0 0 2%"
        width="100%"
        paddingBottom="5%"
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="phone">
          <Typography variant="body1" fontWeight="bold">
            {getFieldLabel('candidate.info.phone')}
          </Typography>
          <Link
            href={getFieldLabel('telephone.link').replace(
              /%(\w*)%/,
              `${formatedInfo.phone}`,
            )}
            underline="none"
            color="#000000DE"
          >
            <Typography variant="body2" maxWidth="100%">
              {formatedInfo.phone}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="email">
          <Typography variant="body1" fontWeight="bold">
            {getFieldLabel('candidate.info.email')}
          </Typography>
          <Link
            href={getFieldLabel('email.link').replace(
              /%(\w*)%/,
              `${formatedInfo.email}`,
            )}
            underline="none"
            color="#000000DE"
          >
            <Typography variant="body2" maxWidth="100%">
              {formatedInfo.email}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="skype">
          <Typography variant="body1" fontWeight="bold">
            {getFieldLabel('candidate.info.skype')}
          </Typography>
          <Link
            href={getFieldLabel('skype.link').replace(
              /%(\w*)%/,
              `${formatedInfo.skype}`,
            )}
            underline="none"
            color="#000000DE"
          >
            <Typography variant="body2" maxWidth="100%">
              {formatedInfo.skype}
            </Typography>
          </Link>
        </Grid>
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
