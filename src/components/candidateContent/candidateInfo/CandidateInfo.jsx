import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { getFieldLabel } from '../../../utils';

import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';
// eslint-disable-next-line import/no-named-as-default
import CandidateInfoEdit from '../candidateInfoEdit/CandidateInfoEdit';

const utc = require('dayjs/plugin/utc');

export const CandidateInfo = (props) => {
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
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography paddingLeft="1%" variant="h4">
          {`${formatedInfo.firstName} ${formatedInfo.lastName}`}
        </Typography>
        <CandidateInfoEdit candidateInfo={formatedInfo} />
      </Box>

      <Divider />
      <List>
        {tableCandidateInfoFields.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />

            <Typography variant="body1">{formatedInfo[item]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CandidateInfo;
