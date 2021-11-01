import React from 'react';
import { 
  Box, Card, Avatar, Typography, Divider, Tabs, Tab, ListItemText, List, ListItem
} from '@mui/material';
import './ProfileCard.sass'
import { Calendar } from '../../components/calendar';
import { ActiveTrainings } from '../../components/activeTrainings';
import { Feedbacks } from '../../components/feedbacks';
import { getFieldLabel } from '../../utils';

const profile = {
  fullName:"John Smith",
  email:"johnsmith@gmail.com",
  location:"NY, USA",
  role:"Education Manager",
  position: "Lead JS Developer"
}

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
    <Box className="mainBox">
      <Box className="leftBox">
        <Box className="topBox" >
          <Card className="infoBox">
            <Typography  variant="h4">{getFieldLabel('profile.card')}</Typography>
            <Box className="dataContainer">
              <Avatar className="avatarImg" variant="square" alt={profile.fullName} />
              <Box className="listBox" >
                <Typography padding="0 0 0 6%" variant="h4">{profile.fullName}</Typography>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.card.email')} />
                    <Typography  variant="body1">{profile.email}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.card.location')} />
                    <Typography  variant="body1">{profile.location}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.card.role')} />
                    <Typography  variant="body1">{profile.role}</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={getFieldLabel('profile.card.position')}/>
                    <Typography  variant="body1">{profile.position}</Typography>
                  </ListItem>
                </List>
              </Box>  
            </Box>
          </Card>
        </Box>
        <Box className="bottomBox">
          <Card className="tabBox">
            <Tabs value={selectedTab} onChange={this.handleChange} > 
              <Tab label="Active trainings" />
              <Tab label="Feedbacks" />
            </Tabs>
            {selectedTab === 0 && <ActiveTrainings />}
            {selectedTab === 1 && <Feedbacks />}
          </Card> 
        </Box>  
      </Box>     
      <Box className="rightBox">
        <Card className="calendarBox" >
          <Calendar />
        </Card>
      </Box>  
    </Box>
    );
  }
}
