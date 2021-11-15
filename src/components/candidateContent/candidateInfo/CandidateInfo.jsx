import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidate());
  }, []);
  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography paddingLeft="1%" variant="h4">
          {`${candidate.firstName} ${candidate.lastName}`}
        </Typography>
        <Button variant="outlined">
          {getFieldLabel('candidate.button.edit')}
        </Button>
      </Box>
      <Divider />

      <List>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.registrationDate')}
          />
          <Typography variant="body1">
            {dayjs(candidate.registrationDate).format('DD.MM.YYYY')}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.bestContactTime')}
          />
          <Typography variant="body1">
            {dayjs(candidate.bestContactTime).format('HH:mm')}
          </Typography>
        </ListItem>

        {tableCandidateCardFields.map((item) => (
          <ListItem>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            <Typography variant="body1">{candidate[item]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
