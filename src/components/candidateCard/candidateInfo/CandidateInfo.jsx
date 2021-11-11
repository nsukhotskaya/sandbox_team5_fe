import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    console.log('hello from candidateInfo');
    dispatch(fetchCandidate());
    console.log('hello from candidateInfo 2');
    console.log(candidate.education);
  }, []);
  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography paddingLeft="1%" variant="h4">
          {`${candidate.firstName} ${candidate.lastName}`}
        </Typography>
        <Button variant="outlined">Edit</Button>
      </Box>
      <Divider />

      <List>
        <ListItem>
          <ListItemText
            primary={(
              <Typography variant="h6">
                {getFieldLabel('candidate.status')}
              </Typography>
            )}
          />
          <Typography variant="h6">{candidate.statusType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.location')} />
          <Typography variant="body1">{candidate.location}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.internship')} />
          <Typography variant="body1">{candidate.internshipId}</Typography>
        </ListItem>
        {/* ? */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.language')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.phone')} />
          <Typography variant="body1">{candidate.phone}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.skype')} />
          <Typography variant="body1">{candidate.skype}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.email')} />
          <Typography variant="body1">{candidate.email}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.contactTime')} />
          <Typography variant="body1">{candidate.bestContactTime}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.stack')} />
          <Typography variant="body1">{candidate.stackType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.englishLevel')} />
          <Typography variant="body1">{candidate.englishLevelType}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.registrationDate')} />
          <Typography variant="body1">{candidate.registrationDate}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.otherInfo')} />
          <Typography variant="body1">{candidate.otherInfo}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.testTaskEvaluation')} />
          <Typography variant="body1">{candidate.testTaskEvaluation}</Typography>
        </ListItem>
        {/* this data will be from internship */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.softSkills')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        {/* this data will be from internship */}
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.hardSkills')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
      </List>
    </Box>
  );
};
