import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { fetchCandidate } from '../../../store/commands';
import { tableCandidateCardFields } from '../../../constants/tableCandidateCardFields';

export const CandidateInfo = () => {
  const { id } = useParams();
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();

  const reformatInfo = () => {
    const newInfo = candidate;
    newInfo.fullName = `${candidate.firstName} ${candidate.lastName}`;
    newInfo.bestContactTime = dayjs(candidate.bestContactTime).format('HH:mm');
    newInfo.registrationDate = dayjs(candidate.registrationDate).format(
      'DD.MM.YYYY',
    );
    return newInfo;
  };

  const newInfo = reformatInfo();

  useEffect(() => {
    dispatch(fetchCandidate(id));
  }, []);
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
        {tableCandidateCardFields.map((item) => (
          <ListItem>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            <Typography variant="body1">{newInfo[item]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
