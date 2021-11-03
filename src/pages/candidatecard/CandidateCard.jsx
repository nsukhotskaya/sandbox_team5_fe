import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
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
          <Typography paddingLeft="1%" variant="h4">
            Grzegorz Brzęczyszczykiewicz
          </Typography>
          <Divider />

          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {getFieldLabel('profile.status')}
                  </Typography>
                }
              />
              <Typography variant="h6">test internship</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.internship')} />
              <Typography variant="body1">test internship</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.stuck')} />
              <Typography variant="body1">стак технологий (енам)</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.english')} />
              <Typography variant="body1">уровень английского(енам)</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.plantojoun')} />
              <Typography variant="body1">планирует присеодиниться</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.date')} />
              <Typography variant="body1">дата подачи заявки</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.location')} />
              <Typography variant="body1">локация</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.phone')} />
              <Typography variant="body1">телефон</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.skype')} />
              <Typography variant="body1">скайп</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.education')} />
              <Typography variant="body1">образование</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.links')} />
              <Typography variant="body1">linkedin?</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.others')} />
              <Typography variant="body1">
                инфо которое указывает кандидат
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.primarySkill')} />
              <Typography variant="body1">главный скилл</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.currentJob')} />
              <Typography variant="body1">текущая работа</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.cert')} />
              <Typography variant="body1">сертификаты</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary={getFieldLabel('profile.тест')} />
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
          <Typography variant="body1">отзывы</Typography>
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
