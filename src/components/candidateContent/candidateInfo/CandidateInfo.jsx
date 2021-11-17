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

  const formatInfo = (info) => {
    const newInfo = { ...info };
    newInfo.fullName = `${info.firstName} ${info.lastName}`;
    newInfo.registrationDate = dayjs(info.registrationDate).format(
      'DD.MM.YYYY HH:mm',
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
          {formatedInfo.fullName}
        </Typography>
        <Button variant="outlined">{getFieldLabel('common.edit')}</Button>
      </Box>
      <Divider />

      <List>
        {tableCandidateInfoFields.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            <Typography variant="body1">
              {formatedInfo[item]}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
