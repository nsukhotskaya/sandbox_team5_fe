import React from 'react';
import { 
  Box, Card, Avatar, List, Typography, ListItem, ListItemText, Divider, Tabs, Tab,
} from '@mui/material';
import './ProfileCard.sass'
import Calendar from '../../components/calendar/Calendar';
import { ActiveTrainings } from '../../components/activeTrainings';
import { Feedbacks } from '../../components/feedbacks';


const profile = {
  avatar:"default",
  card: "Employees Profile",
  fullName:"John Smith",
  email:"E-mail : johnsmith@gmail.com",
  location:"Location : NY, USA",
  role:"Role : Education Manager",
  position: "Position: Lead JS Developer"
}

class ProfileCard extends React.Component{
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
    <Card className="main">
      <Box className="topBox">
        <Typography  variant="h4">{profile.card}</Typography>
        <Box className="dataContainer">
          <Avatar className="avatarImg" src ={profile.avatar} variant="square" alt="John Smith" />
          <List className="dataList">
            <ListItem>
              <Typography  variant="h5">{profile.fullName}</Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={profile.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary={profile.location} />
            </ListItem>
            <ListItem>
              <ListItemText primary={profile.role} />
            </ListItem>
            <ListItem>
              <ListItemText primary={profile.position} />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box className="bottomBox">
        <Box className="tabBox">
          <Tabs value={selectedTab} onChange={this.handleChange} > 
            <Tab label="Active trainings" />
            <Tab label="Feedbacks" />
          </Tabs>
          {selectedTab === 0 && <ActiveTrainings />}
          {selectedTab === 1 && <Feedbacks />}
        </Box> 
        <Box className="calendarBox" >
          <Calendar />
        </Box>
      </Box>  
    </Card>
    );
  }
}

export default ProfileCard;
