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
import { TableTemplate } from '../../components/tableTemplate';
import { columnDefsInternships } from '../../constants';
import { fetchUserInfo, fetchInternships } from '../../store/commands';
import { getFieldLabel, tableFiller } from '../../utils';
import { userProfileListFields } from '../../constants/userProfileListFields';
import { useMediaDown } from '../../components/utils';
import { header, headerMobile } from '../../constants/calendarHeader';
import { Calendar } from '../../components/calendar';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';

const UserProfile = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const internships = useSelector((state) => state.internships.internships);
  const dispatch = useDispatch();

  const isLoading = useSelector(loadingSelector(['GET_USER_INFO'],['GET_INTERNSHIPS']));
  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchInternships());
  }, []);
  const mobile = useMediaDown('md');
  const large = useMediaDown('lg');
  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box className={mobile ? 'pageWrapperMobile' : 'pageWrapper'}>
          <Box 
          width={{ md: '40%', lg: '33%'}} 
          className={mobile ? 'informationMobile' : 'information'}>
            <Card raised className="informationCard">
              <Box
                
                className={
                  mobile ? 'informationContainerMobile' : 'informationContainer'
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
                    align="center"
                    className="text"
                    padding="10px 0px 10px 10px"
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
                        <Typography padding="0px 0px 0px 10px" variant="body1" className="text">
                          {userInfo && userInfo[item]}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box
          width={{ md: '60%', lg: '33%'}}  
          className={mobile ? 'activityMobile' : 'activity'}>
            <Card className="activityTab">
              <TableTemplate
                rowData={tableFiller(userInfo, internships)}
                columnDefs={columnDefsInternships}
              />
            </Card>
          </Box>
          <Box className={large ? 'calendarMobile' : 'calendar'}>
            <Card className={mobile ? 'calendarCardMobile' : 'calendarCard'}>
              {userInfo.email && <Calendar
                headerType={mobile ? headerMobile : header}
                email={userInfo.email}
              />}
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
