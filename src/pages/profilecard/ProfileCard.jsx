import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Card,
  Avatar,
  Typography,
  Divider,
  ListItemText,
  List,
  ListItem,
} from '@mui/material';
import './ProfileCard.sass';
import { fetchUserInfo } from '../../store/commands';
import { Calendar } from '../../components/calendar';
import { getFieldLabel } from '../../utils';
import CustomTabs from '../../components/tabs/Tabs';

const ProfileCard = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);
  return (
    <Box className="pageWrapper">
      <Box className="informationAndActivity">
        <Box className="information">
          <Card className="informationCard">
            <Box className="informationContainer">
              <Avatar
                className="avatarImg"
                variant="square"
                alt={userInfo && userInfo.userName}
              />
              <Box className="informationList">
                <Typography padding="0 0 0 6%" variant="h4">
                  {userInfo.userName}
                </Typography>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.email')} />
                    <Typography variant="body1">{userInfo && userInfo.email}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.location')} />
                    <Typography variant="body1">{userInfo && userInfo.phoneNumber}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.role')} />
                    <Typography variant="body1">{userInfo && userInfo.roleType}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.position')} />
                    <Typography variant="body1">{userInfo && userInfo.position}</Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box className="activity">
          <CustomTabs />
        </Box>
      </Box>
      <Box className="calendar">
        <Card className="calendarCard">
          <Calendar />
        </Card>
      </Box>
    </Box>
  );
};

export default ProfileCard;
