import React from 'react';
import dayjs from 'dayjs';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { getFieldLabel } from '../../../utils';

import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';

export const CandidateInfo = (props) => {
  const { candidateInfo } = props;

  const reformatInfo = (info) => {
    const newInfo = info;
    newInfo.fullName = `${info.firstName} ${info.lastName}`;
    newInfo.registrationDate = dayjs(info.registrationDate).format(
      'DD.MM.YYYY HH:mm',
    );
    newInfo.bestContactTime = dayjs(info.registrationDate).format('HH:mm');
    newInfo.bestContactTime = dayjs(info.registrationDate).format('HH:mm');
    return newInfo;
  };

  const newInfo = reformatInfo(candidateInfo);

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography paddingLeft="1%" variant="h4">
          {newInfo.fullName}
        </Typography>
        <Button variant="outlined">
          {getFieldLabel('candidate.button.edit')}
        </Button>
      </Box>
      <Divider />

      <List>
        {tableCandidateInfoFields.map((item) => (
          <ListItem>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            <Typography variant="body1">{newInfo[item]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
