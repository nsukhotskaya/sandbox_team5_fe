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
import './UserProfile.sass';
import { fetchUserInfo } from '../../store/commands';
import { getFieldLabel } from '../../utils';
import { userProfileListFields } from '../../constants/userProfileListFields';
import CustomTabs from '../../components/tabs/Tabs';
import { useMediaDown } from '../../components/utils';
import { header, headerMobile } from '../../constants/calendarHeader';
import { Calendar } from '../../components/calendar';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';

const UserProfile = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();

  const isLoading = useSelector(loadingSelector(['GET_USER_INFO']));
  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);
  const mobile = useMediaDown('md');
  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box className={mobile ? 'pageWrapperMobile' : 'pageWrapper'}>
          <Box
            className={
              mobile ? 'informationAndActivityMobile' : 'informationAndActivity'
            }
          >
            <Box className="information">
              <Card raised className="informationCard">
                <Box
                  className={
                    mobile
                      ? 'informationContainerMobile'
                      : 'informationContainer'
                  }
                >
                  <Box className="avatarContainer">
                    <Avatar
                      className="avatarImg"
                      variant="square"
                      alt={userInfo.userName}
                    />
                  </Box>
                  <Box className="informationList">
                    <Typography
                      className="text"
                      padding="10px 0px 0px 10px"
                      variant="h4"
                    >
                      {userInfo.userName}
                    </Typography>
                    <Divider />
                    <List>
                      {userProfileListFields.map((item) => (
                        <ListItem key={item}>
                          <ListItemText
                            primary={getFieldLabel(`profile.${item}`)}
                          />
                          <Typography variant="body1" className="text">
                            {userInfo && userInfo[item]}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box className={mobile ? 'activityMobile' : 'activity'}>
              <CustomTabs />
            </Box>
          </Box>
          <Box className={mobile ? 'calendarMobile' : 'calendar'}>
            <Card className={mobile ? 'calendarCardMobile' : 'calendarCard'}>
              <Calendar headerType={mobile ? headerMobile : header} email={userInfo.email}/>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
