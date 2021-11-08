import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Rating,
  Button,
} from '@mui/material';
import { getFieldLabel } from '../../utils';
// import { Header } from '../../components';

//  список данных, отзывы и оценки, связанные с кандидатом пользователи, статус, история

export function CandidateCard() {
  return (
    <Box display="flex" height="100vh" backgroundColor="background.paper">
      {/* <Header /> */}
      <Box
        // display="flex"
        // flexDirection="column"
        padding="1%"
        boxSizing="border-box"
        backgroundColor="background.default"
        width="50%"
        height="100%"
        boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
      >
        <Box
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          padding="2%"
          // width="100%"
          // height="100%"
          backgroundColor="background.paper"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography paddingLeft="1%" variant="h4">
              Grzegorz Brzęczyszczykiewicz
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
              <ListItemText
                primary={getFieldLabel('candidate.applicationDate')}
              />
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
      </Box>
      <Box
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        padding="1% 1% 2% 0"
        width="50%"
        height="100%"
        backgroundColor="background.default"
      >
        <Box
          // boxSizing="border-box"
          // flexDirection="column"
          // marginTop="2%"
          padding="2%"
          height="75%"
          backgroundColor="background.paper"
        >
          <Typography variant="h6">Unassigned HR</Typography>
          <Rating defaultValue={2.5} precision={0.5} max={4} />
          <TextField
            id="outlined-basic"
            placeholder="You can write comment here"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            maxRows={4}
          />
          <Typography variant="h6">Unassigned tech interviewer</Typography>
          <Rating defaultValue={2.5} precision={0.5} max={4} />
          <TextField
            id="outlined-basic"
            placeholder="You can write comment here"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            maxRows={4}
          />
          <Typography variant="h6">Unassigned mentor</Typography>
          <Rating defaultValue={2.5} precision={0.5} max={4} />
          <TextField
            id="outlined-basic"
            placeholder="You can write comment here"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
            maxRows={4}
          />
        </Box>
        <Box
          boxSizing="border-box"
          // flexDirection="column"
          marginTop="2%"
          padding="2%"
          height="25%"
          backgroundColor="background.paper"
        >
          <Typography variant="body1">история</Typography>
        </Box>
      </Box>
    </Box>
  );
}
