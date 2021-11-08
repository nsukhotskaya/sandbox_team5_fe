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
          <Typography variant="h6">Accepted</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.internship')} />
          <Typography variant="body1">test internship</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.skillStack')} />
          <Typography variant="body1">стак технологий</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.englishLevel')} />
          <Typography variant="body1">уровень английского</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.planToJoin')} />
          <Typography variant="body1">планирует присеодиниться</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.applicationDate')} />
          <Typography variant="body1">дата подачи заявки</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.location')} />
          <Typography variant="body1">локация</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.phone')} />
          <Typography variant="body1">телефон</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.skype')} />
          <Typography variant="body1">скайп</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.education')} />
          <Typography variant="body1">образование</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.links')} />
          <Typography variant="body1">linkedin?</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.other')} />
          <Typography variant="body1">
            инфо которое указывает кандидат
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.primarySkill')} />
          <Typography variant="body1">главный скилл</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.currentJob')} />
          <Typography variant="body1">текущая работа</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.certificate')} />
          <Typography variant="body1">сертификаты</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary={getFieldLabel('candidate.test')} />
          <Typography variant="body1">тест</Typography>
        </ListItem>
      </List>
    </Box>
  );
}
