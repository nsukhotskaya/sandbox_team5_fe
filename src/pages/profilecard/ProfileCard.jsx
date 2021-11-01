import React from 'react';
import { 
  Box, Card, Avatar, Typography, Divider, Tabs, Tab, ListItemText, List, ListItem
} from '@mui/material';
import './ProfileCard.sass'
import { Calendar } from '../../components/calendar';
import { getFieldLabel } from '../../utils';
import { tableFeedback, columnDefsFeed, activeInternships, columnDefsInternships, userData } from '../../mocks/profileData.json';
import ProfileTable from '../../components/feedbacks/ProfileTable';

export default class ProfileCard extends React.Component{
  constructor(props) {
    super(props);
    this.state ={ selectedTab: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ( e, newValue) => {
    this.setState ({selectedTab: newValue });
  }

  render(){
    const { selectedTab } = this.state;
    return(
    <Box className="pageWrapper">
      <Box className="informationAndActivity">
        <Box className="information" >
          <Card className="informationCard">
            <Box className="informationContainer">
              <Avatar className="avatarImg" variant="square" alt={userData.fullName} />
              <Box className="informationList" >
                <Typography padding="0 0 0 6%" variant="h4">{userData.fullName}</Typography>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.email')} />
                    <Typography  variant="body1">{userData.email}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.location')} />
                    <Typography  variant="body1">{userData.location}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.role')} />
                    <Typography  variant="body1">{userData.role}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.position')}/>
                    <Typography  variant="body1">{userData.position}</Typography>
                  </ListItem>
                </List>
              </Box>  
            </Box>
          </Card>
        </Box>
        <Box className="activity">
          <Card className="activityTab">
            <Tabs value={selectedTab} onChange={this.handleChange} > 
              <Tab label={getFieldLabel('profile.tab.internships')} />
              <Tab label={getFieldLabel('profile.tab.feedbacks')} />
            </Tabs>
            {selectedTab === 0 && <ProfileTable  rowData={activeInternships} columnDefs={columnDefsInternships} />}
            {selectedTab === 1 && <ProfileTable  rowData={tableFeedback} columnDefs={columnDefsFeed} />}
          </Card> 
        </Box>  
      </Box>     
      <Box className="calendar">
        <Card className="calendarCard" >
          <Calendar />
        </Card>
      </Box>  
    </Box>
    );
  }
}
