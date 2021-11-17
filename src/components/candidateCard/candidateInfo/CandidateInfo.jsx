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
            primary={
              <Typography variant="h6">
                {getFieldLabel('candidate.info.status')}
              </Typography>
            }
          />
          <Typography variant="h6">{candidate.statusType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.location')} />
          <Typography variant="body1">{candidate.location}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.internship')} />
          <Typography variant="body1">{candidate.internshipId}</Typography>
        </ListItem>
        {/* this data will be from internship */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.language')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.phone')} />
          <Typography variant="body1">{candidate.phone}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.skype')} />
          <Typography variant="body1">{candidate.skype}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.email')} />
          <Typography variant="body1">{candidate.email}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.bestContactTime')}
          />
          <Typography variant="body1">
            {dayjs(candidate.bestContactTime).format('HH:mm')}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.stack')} />
          <Typography variant="body1">{candidate.stackType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.englishLevel')}
          />
          <Typography variant="body1">{candidate.englishLevelType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.registrationDate')}
          />
          <Typography variant="body1">
            {dayjs(candidate.registrationDate).format('DD.MM.YYYY')}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.otherInfo')} />
          <Typography variant="body1">{candidate.otherInfo}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary={getFieldLabel('candidate.info.testTaskEvaluation')}
          />
          <Typography variant="body1">
            {candidate.testTaskEvaluation}
          </Typography>
        </ListItem>
        {/* this data will be from internship */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.softSkills')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        {/* this data will be from internship */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.info.hardSkills')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
      </List>
    </Box>
  );
};
