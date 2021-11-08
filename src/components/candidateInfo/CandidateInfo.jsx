import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { getFieldLabel } from '../../utils';

export function CandidateInfo() {
  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography paddingLeft="1%" variant="h4">
          Olga Tumakova
        </Typography>
        <Button variant="outlined">Edit</Button>
      </Box>
      <Divider />

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h6">
                {getFieldLabel('candidate.status')}
              </Typography>
            }
          />
          <Typography variant="h6">Unreviewed</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.internship')} />
          <Typography variant="body1">.NET&JS 2021</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.skillStack')} />
          <Typography variant="body1">Backend</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.primarySkill')} />
          <Typography variant="body1">.NET</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.englishLevel')} />
          <Typography variant="body1">C1</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.planToJoin')} />
          <Typography variant="body1">Tes</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.applicationDate')} />
          <Typography variant="body1">29.09.2021</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.location')} />
          <Typography variant="body1">Warsaw</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.phone')} />
          <Typography variant="body1">+48 1234 5678</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.skype')} />
          <Typography variant="body1">id:12345678</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.education')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.links')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.other')} />
          <Typography variant="body1">-</Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.currentJob')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.certificate')} />
          <Typography variant="body1">-</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.test')} />
          <Typography variant="body1">7</Typography>
        </ListItem>
      </List>
    </Box>
  );
}
